import React from 'react'

import { SplitLayout } from '../components/Containers'
import SEO from '../components/Utils/seo'

const UsesPage = () => (
  <>
    <SEO
      title="Uses"
      keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
    />
    <h1>Uses</h1>
    <p>
      With inspiration from <a href="https://wesbos.com/uses/">Wes Bos</a>, this
      page lists software and hardware I use on a daily basis.
    </p>
    <SplitLayout>
      <div>
        <h2>Software</h2>
        <ul>
          <li>
            My main text editor of choice is{' '}
            <a href="https://code.visualstudio.com">VS Code</a>. If I need to
            work on a server, I use Vim.
          </li>
          <li>
            I use the <a href="https://github.com/tonsky/FiraCode">Fira Code</a>{' '}
            monospace font so I can have font ligatures.
          </li>
          <li>
            <a href="https://www.notion.so/">Notion</a> for note taking and{' '}
            <a href="https://todoist.com">Todoist</a> for a todo list.
          </li>
          <li>
            <a href="https://www.iterm2.com/">iTerm2</a> as my terminal.
          </li>
          <li>Firefox and Chrome for web browsers.</li>
          <li>
            <a href="https://octobox.io">Octobox</a> to keep track of GitHub
            notifications.
          </li>
          <li>I use both Slack and Discord.</li>
          <li>
            <a href="https://www.adobe.com/products/xd.html">Adobe XD</a> for
            design mockups.
          </li>
        </ul>
      </div>
      <div>
        <h2>Hardware</h2>
        <ul>
          <li>I use a 2015 MacBook Pro for my main rig since 2016.</li>
          <li>
            An{' '}
            <a href="https://aziocorp.com/collections/keyboard/products/retro-classic-usb?variant=10731924389931">
              Azio Retro Classic
            </a>{' '}
            mechanical keyboard. It has Kailh blue switches.
          </li>
          <li>
            A{' '}
            <a href="https://www.amazon.com/Dell-Optical-Mouse-MS116-275-BBCB/dp/B012DT5U96/">
              basic Dell mouse
            </a>
            .
          </li>
          <li>
            2{' '}
            <a href="https://www.amazon.com/Dell-UltraSharp-27-Inch-LED-Lit-Monitor/dp/B00P0EQD1Q">
              Dell UltraSharp U2715H external Monitors
            </a>{' '}
            at my desk with my macbook usually closed.
          </li>
        </ul>
      </div>
    </SplitLayout>
  </>
)

export default UsesPage
