const fs = require('fs-extra')
const cssstats = require('cssstats')
const path = require('path')
const moment = require('moment')

require('dotenv').config()

const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })

const sha = process.env.COMMIT_SHA

function unique(arr) {
  return [...new Set(arr)]
}

const cssPath = path.resolve(__dirname, '..', '..', '..', 'public', 'style.css')

if (!fs.existsSync(cssPath)) {
  console.error("public/styles.css does not exist. Try running 'yarn build'")
  process.exit(1)
}

const css = fs.readFileSync(cssPath, 'utf-8')

const stats = cssstats(css)

// Both in KB
const size = stats.size
const gzipSize = stats.gzipSize

const fontsCount = stats.declarations.getUniquePropertyCount('font-size')
const fonts = JSON.stringify(unique(stats.declarations.properties['font-size']))

const colorCount = stats.declarations.getUniquePropertyCount('color')
const colors = JSON.stringify(unique(stats.declarations.properties['color']))

const bgColorCount = stats.declarations.getUniquePropertyCount(
  'background-color'
)
const bgColors = JSON.stringify(
  unique(stats.declarations.properties['background-color'])
)

const widthCount = stats.declarations.getUniquePropertyCount('width')
const widths = JSON.stringify(unique(stats.declarations.properties['width']))

const heightCount = stats.declarations.getUniquePropertyCount('height')
const heights = JSON.stringify(unique(stats.declarations.properties['height']))

const maxWidthCount = stats.declarations.getUniquePropertyCount('max-width')
const maxWidths = JSON.stringify(
  unique(stats.declarations.properties['max-width'])
)

const now = moment()

const params = {
  TableName: 'lannonbr.com-css-stats',
  Item: {
    month: now.format('YYYY-MM'),
    timestamp: now.unix(),
    sha,
    size,
    gzipSize,
    fontsCount,
    fonts,
    colorCount,
    colors,
    bgColorCount,
    bgColors,
    widthCount,
    widths,
    heightCount,
    heights,
    maxWidthCount,
    maxWidths,
  },
}

docClient.put(params, function (err, data) {
  if (err) {
    console.log('Error:', err)
  } else {
    console.log('Success:', data)
  }
})
