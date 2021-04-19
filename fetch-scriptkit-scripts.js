import { promises as fs } from 'fs'
import * as path from 'path'
const cacheDir = './cache'

import { Octokit } from '@octokit/rest'

const client = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export const sourceData = async (options) => {
  try {
    await fs.access(cacheDir)
  } catch (err) {
    fs.mkdir(cacheDir)
  }

  // Get lastest commit to check if we need to download scripts
  const commits = await client.repos.listCommits({
    owner: 'lannonbr',
    repo: 'scriptkit-scripts',
    per_page: 1,
  })

  let previousSHA

  try {
    previousSHA = (
      await fs.readFile(path.join(cacheDir, 'currentSHA.txt'))
    ).toString()
  } catch (err) {
    console.error("previous sha doesn't exist, save content")
    fs.writeFile(path.join(cacheDir, 'currentSHA.txt'), commits.data[0].sha)
    await saveNewScripts(commits.data[0].commit.tree.sha)
    previousSHA = commits.data[0].sha
  }

  if (commits.data[0].sha !== previousSHA) {
    // new sha, redownload scripts
    fs.writeFile(path.join(cacheDir, 'currentSHA.txt'), commits.data[0].sha)

    await saveNewScripts(commits.data[0].commit.tree.sha)
  } else {
    console.log(
      '[fetch-script-kit-scripts]: Cached SHA matches the latest one on GitHub, skip downloading files'
    )
  }

  return await readScripts()
}

async function saveNewScripts(treeSha) {
  const tree = await client.git.getTree({
    owner: 'lannonbr',
    repo: 'scriptkit-scripts',
    tree_sha: treeSha,
  })

  const scripts = tree.data.tree.filter((treeItem) => {
    return treeItem.path.endsWith('.js')
  })

  for (let script of scripts) {
    const blob = await client.git.getBlob({
      owner: 'lannonbr',
      repo: 'scriptkit-scripts',
      file_sha: script.sha,
    })

    const file = Buffer.from(blob.data.content, 'base64').toString()

    try {
      await fs.access(path.join(cacheDir, 'scripts'))
    } catch (err) {
      fs.mkdir(path.join(cacheDir, 'scripts'))
    }

    await fs.writeFile(path.join(cacheDir, 'scripts', script.path), file)
  }
}

async function readScripts() {
  const files = await fs.readdir(path.join(cacheDir, 'scripts'))

  let data = []

  for (const file of files) {
    const fileBuffer = await fs.readFile(path.join(cacheDir, 'scripts', file))
    data.push({
      fileName: file,
      content: fileBuffer.toString(),
    })
  }

  return data
}
