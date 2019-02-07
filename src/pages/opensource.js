import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Layout, SplitLayout } from '../components/Containers'
import SEO from '../components/Utils/seo'
import GitHubRepoCard from '../components/GitHubRepoCard'
import IllustrationImg from '../components/illustrationImg'

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

  --day-size: 10px;

  grid-template-rows: repeat(7, var(--day-size));
  grid-template-columns: repeat(53, var(--day-size));
  grid-auto-flow: column;
  gap: 1px;

  @media (max-width: 1200px) {
    --day-size: 8px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 450px) {
    display: none;
  }
`

const OpenSourcePage = () => {
  return (
    <StaticQuery
      query={githubPinnedRepos}
      render={data => {
        let pinnedRepos = data.github.user.pinnedRepositories
        let calendar =
          data.github.user.contributionsCollection.contributionCalendar

        return (
          <Layout>
            <SEO
              title="Open Source"
              keywords={[`gatsby`, `application`, `react`]}
            />
            <SplitLayout>
              <div>
                <h1>Open Source</h1>
                <p>
                  I'm heavily involved in the Open Source community with a
                  current focus on the Gatsby and VS Code communities
                </p>
                <p>
                  This site is even open sourced on GitHub:{' '}
                  <a href="https://github.com/lannonbr/portfolio-gatsby">
                    lannonbr/portfolio-gatsby
                  </a>
                </p>
                <h2>GitHub Contributions</h2>
                <p>
                  {calendar.totalContributions.toLocaleString()} contributions
                  over the last year
                </p>
                <GitHubContributionsGrid>
                  {calendar.weeks.map((week, weekIndex) => {
                    return week.contributionDays.map((day, dayIndex) => {
                      return (
                        <div
                          className="day"
                          style={{ background: day.color }}
                          key={`${weekIndex}-${dayIndex}`}
                        />
                      )
                    })
                  })}
                </GitHubContributionsGrid>
              </div>
              <div>
                <IllustrationImg src={vc} alt="version control illustration" />
              </div>
            </SplitLayout>
            <h2>My GitHub Pinned Repos</h2>
            <PinnedReposGridContainer>
              {pinnedRepos.edges.map(({ node: repo }, index) => {
                return <GitHubRepoCard repo={repo} key={index} />
              })}
            </PinnedReposGridContainer>
          </Layout>
        )
      }}
    />
  )
}

export default OpenSourcePage
