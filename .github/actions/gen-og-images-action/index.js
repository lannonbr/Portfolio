const { firefox } = require('playwright-firefox')
const fs = require('fs')
const readline = require('readline')
const path = require('path')
const ogReactComponentScript = fs.readFileSync('./dist/image.js', 'utf-8')

async function getTitle(path) {
  var rs = fs.createReadStream(path, { encoding: 'utf8' })

  const rl = readline.createInterface({
    input: rs,
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    if (line.startsWith('title')) {
      return line
    }
  }
}

async function run() {
  const files = fs.readdirSync(
    path.join(__dirname, '..', '..', '..', 'content', 'blog')
  )

  const browser = await firefox.launch()
  const page = await browser.newPage()

  page.setViewportSize({
    width: 1200,
    height: 630,
  })

  await page.setContent(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
      />
      <style>*{ padding: 0; margin: 0; font-family: "Inter", Arial, Helvetica, sans-serif; }</style>
    </head>
    <body>
      <div id="opengraph"><div>Opengraph component not rendered yet</div></div>
    </body>
  </html>
  `)

  for (const fileName of files) {
    const line = await getTitle(
      path.join(
        __dirname,
        '..',
        '..',
        '..',
        'content',
        'blog',
        fileName,
        'index.md'
      )
    )

    const title = line.slice(8, -1)

    await page.addScriptTag({
      content: `
        window.postTitle = "${title}";
      `,
    })

    await page.addScriptTag({
      content: ogReactComponentScript,
    })

    if (!fs.existsSync(path.join(__dirname, 'dist', 'posts'))) {
      fs.mkdirSync(path.join(__dirname, 'dist', 'posts'))
    }

    await page.screenshot({
      type: 'jpeg',
      quality: 75,
      path: path.join(__dirname, 'dist', 'posts', `${fileName}.jpg`),
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    })
  }

  await browser.close()
}

run()
