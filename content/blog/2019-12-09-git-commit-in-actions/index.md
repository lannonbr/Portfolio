---
title: 'Using git commit in GitHub Actions'
date: '2019-12-09'
description: 'Tutorial on making commits in github actions'
keywords:
  - Git
  - GitHub Actions
logo: github-actions
---

GitHub Actions provides full access to the runner at your disposal, and one thing you may want to do is make commits in a workflow run and push it back up to GitHub automatically. I'm going to show a simple example where we run the `date` unix command, save the contents to a file, and push it back to the master branch.

## Checkout v2

With the new release of a beta for the V2 of the [actions/checkout](https://github.com/actions/checkout) action, it now will checkout the branch and setup the upstream alongside it. Previously it checked out to the exact commit and would cause a detached head state, but that is no longer the case.

Now, with such, pushing back to a branch is as simple as `git commit origin <branch>`

## Example workflow

The following is a workflow which on push will do the following:

1. checkout the repo
1. run `date` and save it to `time.txt`
1. setup git config
1. commit the changed file and push it back to master

```yaml
name: Commit date to master
on: push
jobs:
  date:
    runs-on: ubuntu-latest
    steps:
      # Checkout the branch
      - name: checkout
        uses: actions/checkout@v2-beta # use either @v2-beta or @master. Eventually there will be a @v2 tag.

      - name: save current date
        run: |
          # do some operation that changes a file in the git repo
          date > time.txt

      - name: setup git config
        run: |
          # setup the username and email. I tend to use 'GitHub Actions Bot' with no email by default
          git config user.name "GitHub Actions Bot"
          git config user.email "<>"

      - name: commit
        run: |
          # Stage the file, commit and push
          git add time.txt
          git commit -m "new date commit"
          git push origin master
```

There's no magic to what is being done. No complex git commands at play. Just plain old `add`, `commit`, and `push`.

On top of this, some additions or extractions for this workflow could be made:

- Instead of committing to `master`, could commit to the specific branch that triggered the `on: push` in the workflow.
- You could conditionally check if any files were changed and skip the commit if there were no changes.

With this, you can have your scripts make commits on your behalf. As the full `git` client is available, you can get extremely deep into doing things like reverts, rebases, etc, but for the usual tasks of doing commits, GitHub Actions provides the functionality to do as you would on your local machine.
