# Workflow for Gatsby Site Showcase Validator

1. Check logs in GitHub Actions Dashboard
2. First check if anything has a `[notice]` or `[err]` and then check the site for more info.
3. open `sites.yml` and search for the entry and look for the person who submitted this.
4. If we can find a user or github org, find some way to contact them.
5. Contact them asking about the site.
6. if it is intentional, push a PR to remove it
7. if it was on accident, possibly help resolve or wait for them to resolve it

# Issues

- In step 3, what happens if we don't see a built_by field?
  - have to do a `git blame` and find the PR that it was added in.
- Contacting may be difficult, they may not have a twitter or email that is public.
