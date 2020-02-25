import React from 'react'

import { Star, GitBranch } from 'react-feather'

function GitHubRepoCard(props) {
  let repo = props.repo
  return (
    <div className="flex flex-col border border-solid border-gray-400 rounded-md p-4">
      <a href={repo.url}>{repo.nameWithOwner}</a>
      <p className="flex-grow">{repo.description}</p>
      <p className="flex items-center mb-0">
        {repo.primaryLanguage && (
          <>
            <span className="flex items-center justify-center">
              <span
                className="w-5 h-5 mr-2 inline-block rounded-full"
                style={{ backgroundColor: repo.primaryLanguage.color }}
              />
            </span>
            <span className="mr-5">{repo.primaryLanguage.name}</span>
          </>
        )}
        {repo.stargazers.totalCount > 0 && (
          <span className="flex items-center mr-5">
            <Star width={20} className="mr-1" />
            {repo.stargazers.totalCount.toLocaleString()}
          </span>
        )}
        {repo.forkCount > 0 && (
          <span className="flex items-center">
            <GitBranch width={20} className="mr-1" />
            {repo.forkCount}
          </span>
        )}
      </p>
    </div>
  )
}

export default GitHubRepoCard
