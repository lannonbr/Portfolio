---
title: 'Automating blogpost creation with Plop'
date: '2020-05-09'
description: 'How I am automating creation of new posts on my site with Plop'
---

Whenever I come in to create a new post here, theres some of a schema of default fields and things I need for each post, I decided to automate this using the [Plop](https://plopjs.com/) JS library.

Plop is built where you can setup a prompt using [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) and generate files / folders based on the inputs.

To start out, install Plop as a devDependency

```shell
yarn add --dev plop
```

For my workflow, I want it to create a new markdown file in my `content/blog` directory with some frontmatter automatically filled in. The `plopfile.js` file is where this is defined:

```js title=plopfile.js
module.exports = function (plop) {
  const { format } = require('date-fns')

  let date = format(new Date(), 'yyyy-MM-dd')

  plop.setGenerator('post', {
    description: 'New Post',
    prompts: [
      {
        name: 'title',
        type: 'input',
        message: 'Post Name:',
      },
      {
        name: 'slug',
        type: 'input',
        message: 'Post Slug:',
      },
      {
        name: 'desc',
        type: 'input',
        message: 'Post Description:',
      },
      {
        name: 'date',
        type: 'input',
        default: `${date}`,
      },
    ],
    actions: (data) => [
      {
        type: 'add',
        path: 'content/blog/{{ slug }}/index.md',
        templateFile: 'plop-templates/post.md',
      },
    ],
  })
}
```

The `prompts` field defines a list of things to be inputted from the user. then in the `actions` field, I have a single entry with the type `add` which will create a markdown file that will be parsed with [Handlebars](https://handlebarsjs.com/) to insert the various fields into the generated post:

```markdown title=plop-templates/post.md
---
title: '{{ title }}'
date: '{{ date }}'
description: '{{ desc }}'
---
```

Then I can add a new script to my package.json file to run this generator.

```json title=package.json
{
  "scripts": {
    "post": "plop post"
  }
}
```

and then when I now run `npm run post` or `yarn post`, I can quickly scaffold out a new post.
