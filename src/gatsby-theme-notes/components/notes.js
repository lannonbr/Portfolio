import React from 'react'
import Notes from 'gatsby-theme-notes/src/components/notes'
import { SplitLayout } from '../../components/Containers'
import IllustrationImg from '../../components/illustrationImg'
import streamData from '../../images/taking-notes.svg'
import SEO from '../../components/Utils/seo'

export default props => (
  <>
    <SEO
      title="Notes"
      keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
    />
    <SplitLayout>
      <div>
        <h1>Notes</h1>
        <p>
          This is a collection of personal notes that may not be fully
          organized, but just is a place to write down ideas before moving it
          into either a blogpost or a page on{' '}
          <a href="https://lannonbr.dev/">lannonbr.dev</a>.
        </p>
        <Notes {...props} />
      </div>
      <div>
        <IllustrationImg src={streamData} alt="Taking Notes illustration" />
      </div>
    </SplitLayout>
  </>
)
