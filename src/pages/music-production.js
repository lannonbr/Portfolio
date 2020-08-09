import React from 'react'
import SEO from '../components/seo.js'

import MusicProdIllustration from '../images/music-prod.js'

const MusicProductionPage = () => {
  return (
    <section className="md:grid md:grid-cols-2 md:gap-8 mb-4">
      <SEO title="Music Production" />
      <div>
        <h1>Music Production</h1>
        <p>
          Over the quarantine in 2020, I decided to take a deep dive into music
          production. I'm still in a very experimenting phase but looking to
          eventually start aranging tracks.
        </p>
        <h2>Software</h2>
        <ul className="list-disc pl-4">
          <li>
            <a href="https://www.ableton.com/en/live/">Ableton Live 10 Suite</a>
          </li>
          <li>
            <a href="https://vcvrack.com/">VCV Rack</a>
          </li>
        </ul>
        <h2>Equipment</h2>
        <ul className="list-disc pl-4">
          <li>
            <a href="https://www.shure.com/en-US/products/microphones/sm58">
              Shure SM58 Dynamic XLR Microphone
            </a>
          </li>
          <li>
            <a href="https://www.cloudmicrophones.com/cloudlifter-cl-1">
              Cloudlifter CL-1 Mic Activator
            </a>
          </li>
          <li>
            <a href="https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-solo">
              Focusrite Scarlett Solo USB Audio Interface
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Novation-Launchpad-Mini-Controller-Ableton/dp/B07WNSHR3V/">
              Novation Launchpad Mini MK3 MIDI Controller
            </a>
          </li>
          <li>
            <a href="https://novationmusic.com/en/keys/launchkey-mini">
              Novation Launchkey Mini MK3 MIDI Keyboard
            </a>
          </li>
          <li>
            <a href="https://novationmusic.com/en/launch/launch-control-xl">
              Novation LaunchControl XL MIDI Controller
            </a>
          </li>
        </ul>
        <h2>Eurorack Modular Synth</h2>
        <p>
          My current rack on ModularGrid:{' '}
          <a href="https://www.modulargrid.net/e/racks/view/1289453">
            https://www.modulargrid.net/e/racks/view/1289453
          </a>
        </p>
      </div>
      <div className="hidden md:block">
        <MusicProdIllustration />
      </div>
    </section>
  )
}

export default MusicProductionPage
