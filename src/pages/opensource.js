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
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                color
              }
            }
          }
        }
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

const GitHubContributionsGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 10px);
  grid-template-columns: repeat(53, 10px);
  grid-auto-flow: column;
  gap: 1px;
  max-width: 100%;

  @media (max-width: 768px) {
    grid-template-rows: repeat(7, 7px);
    grid-template-columns: repeat(53, 7px);
    margin-bottom: 30px;
    justify-content: center;
  }

  @media (max-width: 400px) {
    grid-template-rows: repeat(7, 6px);
    grid-template-columns: repeat(53, 6px);
  }
`

const OpenSourcePage = () => (
  <StaticQuery
    query={githubPinnedRepos}
    render={data => (
      <Layout>
        <SEO
          title="Open Source"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <SplitLayout>
          <div>
            <h1>Open Source</h1>
            <p>
              I'm heavily involved in the Open Source community with a current
              focus on the Gatsby and VS Code communities
            </p>
            <p>
              This site is even open sourced on GitHub:{' '}
              <a href="https://github.com/lannonbr/portfolio-gatsby">
                lannonbr/portfolio-gatsby
              </a>
            </p>
            <h2>GitHub Contributions</h2>
            <p>
              {data.github.user.contributionsCollection.contributionCalendar.totalContributions.toLocaleString()}{' '}
              contributions over the last year
            </p>
            <GitHubContributionsGrid>
              {data.github.user.contributionsCollection.contributionCalendar.weeks.map(
                week => {
                  return week.contributionDays.map(day => {
                    return (
                      <div className="day" style={{ background: day.color }} />
                    )
                  })
                }
              )}
            </GitHubContributionsGrid>
          </div>
          <img
            style={{ width: '100%', maxWidth: 600, marginLeft: 30 }}
            src={vc}
            alt="version control illustration"
          />
        </SplitLayout>
        <h2>My GitHub Pinned Repos</h2>
        <PinnedReposGridContainer>
          {data.github.user.pinnedRepositories.edges.map(({ node }) => {
            return <GitHubDetailCard repo={node} />
          })}
        </PinnedReposGridContainer>
      </Layout>
    )}
  />
)

export default OpenSourcePage
