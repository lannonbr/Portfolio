const fs = require('fs')
const yaml = require('js-yaml')
const dayjs = require('dayjs')

exports.sourceData = async (options) => {
  let data = yaml.safeLoad(
    fs.readFileSync('./content/projects/tinkerProjects.yml', 'utf-8')
  )

  data.projects = data.projects.map((project) => {
    project.created_date = dayjs(project.created_date).format('MMMM YYYY')

    return project
  })

  return { data }
}
