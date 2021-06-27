/** @jsx h */
import { h, Fragment } from 'preact'
import SEO from '../components/seo.js'

const UsesPage = () => (
  <Fragment>
    <SEO title="Uses" />
    <h1>Uses</h1>
    <section class="split-grid">
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
            <a href="https://www.iterm2.com/">iTerm2</a> as my terminal on
            MacOS. Windows Terminal on Windows 10.
          </li>
          <li>Firefox and Microsoft Edge for web browsers.</li>
          <li>I use Discord for text / voice communication with collagues.</li>
          <li>
            <a href="https://www.adobe.com/products/xd.html">Adobe XD</a> or{' '}
            <a href="https://www.figma.com">Figma</a> for design mockups.
          </li>
        </ul>
      </div>
      <div>
        <h2>PC Build</h2>
        <p>My main machine as of July 2019 is a custom built PC</p>
        <ul>
          <li>AMD Ryzen 7 3700x - 8 core / 16 thread CPU</li>
          <li>Corsair Vengence RGB Pro 2666MHz DDR4 RAM - 32GB (2x16GB)</li>
          <li>2x Samsung 970 Evo Plus NvMe M.2 1TB SSD</li>
          <li>Nvidia GeForce RTX 2070 Super GPU</li>
          <li>MSI MPG x570 Gaming Edge Wifi Motherboard</li>
          <li>EVGA Supernova 750W G3 Gold Power Suppy</li>
        </ul>
        <h2>Other Hardware</h2>
        <ul>
          <li>I use a 2021 M1 Mac Mini as my secondary machine.</li>
          <li>
            A{' '}
            <a href="https://www.keychron.com/pages/keychron-k8-wireless-mechanical-keyboard">
              Keychron K8
            </a>{' '}
            mechanical keyboard. It has Gateron brown switches and I have the{' '}
            <a href="https://thekey.company/collections/islander">
              Infinikey PBT Islander keycaps
            </a>{' '}
            on it.
          </li>
          <li>
            A{' '}
            <a href="https://www.logitech.com/en-us/product/mx-master-3">
              Logitech MX Master 3 mouse
            </a>
            .
          </li>
          <li>
            2{' '}
            <a href="https://www.amazon.com/Dell-UltraSharp-27-Inch-LED-Lit-Monitor/dp/B00P0EQD1Q">
              Dell UltraSharp U2715H external Monitors
            </a>
            .
          </li>
          <li>
            2{' '}
            <a href="https://www.elgato.com/en/gaming/key-light">
              Elgato key lights
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/gp/product/B00MHPAFAG/">
              Sony a5100 Mirrorless Camera
            </a>{' '}
            (with a{' '}
            <a href="https://www.amazon.com/Sigma-16mm-Contemporary-Lens-Sony/dp/B077BWD2BB/">
              Sigma 16MM f/1.4 Lens
            </a>
            )
          </li>
          <li>
            <a href="https://www.elgato.com/en/gaming/stream-deck">
              Elgato StreamDeck
            </a>
          </li>
        </ul>
        <h2>Audio &amp; Music Gear</h2>
        <p>
          Visit the <a href="/music-production/">Music Production</a> page for
          more info.
        </p>
      </div>
    </section>
  </Fragment>
)

export default UsesPage
