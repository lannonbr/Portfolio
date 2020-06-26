const fs = require('fs')
const yaml = require('js-yaml')
const { format } = require('date-fns')

exports.sourceData = async (options) => {
  let data = yaml.safeLoad(
    fs.readFileSync('./content/projects/tinkerProjects.yml', 'utf-8')
  )

  data.projects = data.projects.map((project) => {
    project.created_date = format(project.created_date, 'MMMM yyyy')

    return project
  })

  return { data }
}
