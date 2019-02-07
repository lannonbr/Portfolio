import React from 'react'
import styled from 'styled-components'

import { Star, GitBranch } from 'react-feather'

const CardWrapper = styled.div`
  border: 1px solid #d1d5da;
  border-radius: 3px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  p.description {
    flex-grow: 1;
  }

  p:last-child {
    margin-bottom: 0;
  }

  p.metadata {
    display: flex;
    align-items: center;
  }
`

const LanguageCircle = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: ${props => props.color};
  border-radius: 10px;
  margin-right: 10px;
`

const flexAlignCenter = {
  display: 'flex',
  alignItems: 'center',
}

function GitHubRepoCard(props) {
  let repo = props.repo
  return (
    <CardWrapper>
      <a href={repo.url}>{repo.nameWithOwner}</a>
      <p className="description">{repo.description}</p>
      <p className="metadata">
        {repo.primaryLanguage && (
          <>
            <span
              style={{
                ...flexAlignCenter,
                justifyContent: 'center',
              }}
            >
              <LanguageCircle color={repo.primaryLanguage.color} />
            </span>
            <span style={{ marginRight: 20 }}>{repo.primaryLanguage.name}</span>
          </>
        )}
        {repo.stargazers.totalCount > 0 && (
          <span style={{ marginRight: 30, ...flexAlignCenter }}>
            <Star width={20} style={{ marginRight: 5 }} />
            {repo.stargazers.totalCount.toLocaleString()}
          </span>
        )}
        {repo.forkCount > 0 && (
          <span style={{ ...flexAlignCenter }}>
            <GitBranch width={20} style={{ marginRight: 5 }} />
            {repo.forkCount}
          </span>
        )}
      </p>
    </CardWrapper>
  )
}

export default GitHubRepoCard
