const fs = require('fs')
const yaml = require('js-yaml')
const { format, parseISO } = require('date-fns')

exports.sourceData = async (options) => {
  let data = yaml.safeLoad(
    fs.readFileSync('./content/projects/featuredProjects.yml', 'utf-8')
  )

  data.projects = data.projects.map((project) => {
    project.created_date = format(parseISO(project.created_date), 'MMMM yyyy')

    return project
  })

  return { data }
}
