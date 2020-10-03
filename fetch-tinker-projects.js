import fs from 'fs'
import yaml from 'js-yaml'
import dayjs from 'dayjs'

export const sourceData = async (options) => {
  let data = yaml.safeLoad(
    fs.readFileSync('./content/projects/tinkerProjects.yml', 'utf-8')
  )

  data.projects = data.projects.map((project) => {
    project.created_date = dayjs(project.created_date).format('MMMM YYYY')

    return project
  })

  return data.projects
}
