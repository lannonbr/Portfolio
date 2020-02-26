import React from 'react'
import { SplitLayout } from '../components/Containers'
import SEO from '../components/Utils/seo'
import GitHubRepoCard from '../components/GitHubRepoCard'
import IllustrationImg from '../components/illustrationImg'

import usePinnedRepositories from '../hooks/usePinnedRepositories'
import useStarredRepos from '../hooks/useStarredRepos'

import star from '../images/star.svg'

import vc from '../images/versioncontrol.svg'

const OpenSourcePage = () => {
  const pinnedRepos = usePinnedRepositories()
  let starredRepos = useStarredRepos()

  starredRepos.edges = starredRepos.edges.reverse()

  return (
    <>
      <SEO
        title="Open Source"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
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
          <h2>Recently Starred Repos</h2>
          <p>A few of the recent repositories that have caught my eye:</p>
          <ul className="pl-8" style={{ listStyleImage: `url(${star})` }}>
            {starredRepos &&
              starredRepos.edges.map(({ node: repo }) => {
                return (
                  <li>
                    <a href={repo.url}>{repo.nameWithOwner}</a> -{' '}
                    {repo.stargazers.totalCount} star
                    {repo.stargazers.totalCount > 1 && 's'}
                  </li>
                )
              })}
          </ul>
        </div>
        <div>
          <IllustrationImg src={vc} alt="version control illustration" />
        </div>
      </SplitLayout>
      <h2>My GitHub Pinned Repos</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {pinnedRepos.edges.map(({ node: repo }, index) => {
          return <GitHubRepoCard repo={repo} key={index} />
        })}
      </div>
    </>
  )
}

export default OpenSourcePage
