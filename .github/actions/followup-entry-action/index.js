const fs = require('fs')
const path = require('path')

const name = process.env.INPUT_NAME
const url = process.env.INPUT_URL

let page = fs
  .readFileSync(
    path.join(process.env.GITHUB_WORKSPACE, 'content', 'notes', 'followup.md')
  )
  .toString()

let content = page.split('\n')

content.splice(2, 0, `- [${name}](${url})`)

fs.writeFileSync(
  path.join(process.env.GITHUB_WORKSPACE, 'content', 'notes', 'followup.md'),
  content.join('\n')
)
