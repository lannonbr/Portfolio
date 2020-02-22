---
title: 'Creating a SMS bot to notify of upcoming events with GitHub Actions and Twilio'
date: '2020-02-24'
description: 'Desc'
keywords:
  - GitHub Actions
  - Twilio
---

- Setup Twilio acct & get phone number capable of SMS & grab SID and Auth Token
- Create set of events. Each has a name, date (and image for the Web UI)
- Create this script:

```js
const path = require('path')

const countdowns = require(`./github/workspace/js/countdowns.js`)

const moment = require('moment')
require('dotenv').config()
const twilio = require('twilio')

let thisWeekEvents = []

countdowns.forEach(event => {
  let hoursTillEvent = moment(event.date).diff(moment(), 'hours')

  if (hoursTillEvent > -1 && hoursTillEvent < 24 * 7) {
    thisWeekEvents.push(event)
  }
})

if (thisWeekEvents.length > 0) {
  let str = `This week's events (${moment().format('ll')})\n`

  thisWeekEvents.forEach(event => {
    str += '- ' + event.title + '\n'
  })

  let client = twilio(process.env.twilio_sid, process.env.twilio_auth_token)

  client.messages
    .create({
      body: str,
      from: process.env.from_num,
      to: process.env.to_num,
    })
    .then(message => console.log(message))
    .catch(err => console.error(err))
}
```

- Setup a GitHub Action workflow that runs this weekly
