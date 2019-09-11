# Ways to improve the validator

Create a dashboard to more easily expose the errors to Gatsby contributors / users.

## Details

- plop in action logs at bottom of page

- List of SiteErrorCard components
- each card will have either a type of "HTTP Error" or "Not Gatsby Site"
- list details about each site.
  - Title for the site
  - URL
  - creator
    - from built_by field
    - dug through git info (blame) to find the PR
  - PR that the site was added

## Stretch goals

- button for each of these cards to "auto create a PR" and notify the creator of the site about it.
  - maybe under your user
  - maybe under a bot (add some auth before allowing this)
- live updating data
  - has it been fixed?
  - is there an open PR to fix this?
- send "notifications" (Text, Email)
