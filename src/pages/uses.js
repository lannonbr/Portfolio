import React from 'react'

import { Layout } from '../components/Containers'
import SEO from '../components/Utils/seo'

const UsesPage = () => (
  <Layout>
    <SEO title="Uses" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Uses</h1>
    <p>
      With inspiration from <a href="https://wesbos.com/uses/">Wes Bos</a>, this
      page is going to list hardware / software I use on a daily basis
    </p>
    <h2>Hardware</h2>
    <ul>
      <li>I've use a 2015 MacBook Pro for my main rig since 2016.</li>
      <li>
        I have an{' '}
        <a href="https://aziocorp.com/collections/keyboard/products/retro-classic-usb?variant=10731924389931">
          Azio Retro Classic
        </a>{' '}
        mechanical keyboard. It has Kailh blue switches.
      </li>
      <li>
        I'm use a{' '}
        <a href="https://www.amazon.com/Dell-Optical-Mouse-MS116-275-BBCB/dp/B012DT5U96/">
          basic Dell mouse
        </a>
        .
      </li>
      <li>
        I use 2{' '}
        <a href="https://www.amazon.com/Dell-UltraSharp-27-Inch-LED-Lit-Monitor/dp/B00P0EQD1Q">
          Dell UltraSharp U2715H Monitors
        </a>{' '}
        at my desk and I tend to have my Mac closed and just use the two Dells
        for displays.
      </li>
    </ul>
    <h2>Software</h2>
    <ul>
      <li>
        My main text editor of choice is{' '}
        <a href="https://code.visualstudio.com">VS Code</a>. If I need to work
        on a server, I use Vim.
      </li>
      <li>
        I use the <a href="https://github.com/tonsky/FiraCode">Fira Code</a>{' '}
        monospace font so I can have font ligatures.
      </li>
      <li>
        For productivity, I use <a href="https://www.notion.so/">Notion</a> for
        note taking and <a href="https://todoist.com">Todoist</a> for a todo
        list.
      </li>
      <li>
        The terminal I use is <a href="https://www.iterm2.com/">iTerm2</a>.
      </li>
      <li>As a Web Developer, I use both Firefox and Chrome.</li>
      <li>
        To keep track of GitHub notifications, I use{' '}
        <a href="https://octobox.io">Octobox</a>.
      </li>
      <li>I am in various communities so I use both Slack and Discord.</li>
      <li>
        For Design mockups, I use{' '}
        <a href="https://www.adobe.com/products/xd.html">Adobe XD</a>.
      </li>
    </ul>
  </Layout>
)

export default UsesPage
