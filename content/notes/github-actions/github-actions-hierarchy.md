# GitHub Actions Hierarchy

Going from complete setups down to the atomic level of a GitHub Actions workflow consists of 3 parts

1. Workflows
2. Jobs
3. Steps

## Workflows

This is a complete setup. Think of it like an entire program that has many modules inside it doing various things.

**Example**: a complete CI process. It will spin up some environments, do some linting, run some tests, and do other various checks.

## Jobs

These are individual chunks of tasks within a workflow. Think of them like functions that do one thing.

If there are multiple jobs in a workflow, they will run in parallel, but you can organize them so jobs are dependent on another job.

**Example**: a single portion of the CI, let's say just running the unit tests

## Steps

This is the core of a job. this can be thought of as individual lines inside a function.

**Example**: individual items in the process of running unit tests like running `npm test`.
