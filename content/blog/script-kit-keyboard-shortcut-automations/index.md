---
title: 'Keyboard shortcut automations with JS and Script Kit'
date: '2021-05-09'
description: 'How to enhance and automate workflows by writing keyboard shortuct enabled Script Kit scripts'
logo: 'script-kit'
status: budding
---

For the past month I've been using John Lindquist's [Script Kit](https://scriptkit.com) to automate daily workflows. One of my favorite parts of Script Kit so far is being able to add metadata comments at the top of a file and the scripts automatically being affected. One in particular is adding a `// Shortcut:` comment which will bind a keyboard shortcut to trigger a script.

For example, I have a script that generates a random UUID and saves it to my clipboard:

```js
// Menu: UUID
// Description: Generate a v4 UUID and copy to clipboard
// Shortcut: opt u

copy(uuid())
```

On the third line down, I am mapping `option + u` on my mac to run this script. By default on MacOS, the `option` key plus any alphanumeric key is mainly used for miscellaneous characters that aren't physically on a QWERTY keyboard. Due to this, I can easily override these without the issue of overiding keyboard shortcuts for other applications on my machine. Now whenever I need a UUID for some project I am working on, I can press `opt + u` and then paste it in whatever textbox I want to fill in, in a CMS, text editor, or other input form.

Another example of this is when I am working with deployed OpenGraph images. [Twitter's Card Validator](https://cards-dev.twitter.com/validator) is useful to confirm that the OpenGraph cards exist and are inserted correctly into a webpage. Because of this, I wrote a script that uses the `open` MacOS command which when given a URL will open my web browser with the URL given. Now this site is a few keypresses away whenever and whatever I am doing on my mac. This then can further be copied and I can run this for as many sites as I wish or someone can quickly copy this script for sites that they wish to have quick access to.

```js
// Menu: Twitter Validator
// Description: Open Twitter Opengraph image validator in default browser
// Shortcut: opt shift t

exec("open https://cards-dev.twitter.com/validator");
```

Having the ability to setup keyboard shorctus for NodeJS scripts has been an extremely handy boost to my usage of my Mac. Further beyond, it can be enhanced further with tools like [Karabiner Elements](https://karabiner-elements.pqrs.org/) or [Keyboard Maestro](https://www.keyboardmaestro.com/main/) to make working on MacOS a very automated system whether I am in a programming aspect or just day to day general usage.