import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GitHubDetailCard from '../components/GitHubDetailCard'
import SplitLayout from '../components/SplitLayout'

import vc from '../images/versioncontrol.svg'

const githubPinnedRepos = graphql`
  {
    github {
      user(login: "lannonbr") {
        name
        pinnedRepositories(first: 6) {
          edges {
            node {
              nameWithOwner
              description
              url
              forkCount
              primaryLanguage {
                color
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`

const PinnedReposGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const OpenSourcePage = () => (
  <Layout>
    <SEO title="Open Source" keywords={[`gatsby`, `application`, `react`]} />
    <SplitLayout>
      <div>
        <h1>Open Source</h1>
        <p>I'm heavily involved in the Open Source community.</p>
        <p>
          This site is even open sourced on github:{' '}
          <a href="https://github.com/lannonbr/portfolio-gatsby">
            lannonbr/portfolio-gatsby
          </a>
        </p>
      </div>
      <img src={vc} />
    </SplitLayout>
    <h2>My GitHub Pinned Repos</h2>
    <StaticQuery
      query={githubPinnedRepos}
      render={data => (
        <PinnedReposGridContainer>
          {data.github.user.pinnedRepositories.edges.map(({ node }) => {
            return <GitHubDetailCard repo={node} />
          })}
        </PinnedReposGridContainer>
      )}
    />
  </Layout>
)

export default OpenSourcePage
