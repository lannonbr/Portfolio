# Triggers

## PRs

- **check_run**: individual task of an external CI
- **check_suite**: suite of tasks of an external CI
- **pull_request**: Triggered on actions around PRs
- **pull_request_review**: review of a PR
- **pull_request_review_comment**: comment on PR in the code

## GitHub Projects (Kanban boards)

- **project**: general actions around a project
- **project_card**: actions related to tasks with a card on a project
- **project_column**: actions related to editing a column in a project

## Releasing / Deployment

- **deployment**: when a deployment is created or modified
- **deployment_status**: when a deployment's status changes
- **page_build**: pushed to a GitHub Pages branch
- **release**: when a release is made or modified

## Org related

- **member**: when a person is added / removed as a collaborator on a repo

## Issues

- **issues**: general actions around an issue
- **issue_comment**: comment on an issue

## General Git

- **create**: create a tag / branch
- **delete**: delete a tag / branch
- **push**: make a push of any kind (commit or tag)
- **commit_comment**: someone makes a comment on a particular commit

## Misc

- **schedule**: trigger based on cronjob schedule
- **repository_dispatch**: Webhook for 3rd party access
- **public**: when a private repo goes public
- **watch**: when someone stars a repo
- **fork**: when a repo is forked
- **gollum**: when pages in the repo's wiki are edited
- **label**: actions around label modification
- **milestone**: when GitHub Milestones are edited
- **status**: when the CI status of a commit changes
