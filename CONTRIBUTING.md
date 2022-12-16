# Contributing

The components exposed by this library follows the ZOPA design system.

Any change can be refused if that change breaks with any of the company internal road-map. If you still want to go ahead
with those changes you can always fork the project.

Please make sure you have a read to our [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting any contribution.

## Table of Contents

- [Documentation](#documentation)
- [Tracking progress](#tracking-progress)
- [Project structure](#project-structure)
- [Commit messages](#commit-messages)
- [Release process](#release-process)
- [Prereleases](#prerelease-aka-beta-release)

## Documentation

Helping by raising issues or improving documentation is the recommended way to contribute on this project.

## Tracking progress

We use a mix of Github issues, and a private JIRA board (only accessible to Zopa employees) for tracking progress on this library.

A story or issue reference must be attached in the description of any pull request.

Please help reviewers by documenting your pull request extensively with screenshots and the rationale behind it.

## Project Structure

Components live in `src/components` in their own folder and contain the following files:

```
src/
  components/
    Button/
      Button.md
      Button.tsx
      Button.test.tsx
```

- [x] Markdown file (`Button.md`, documents the component)
- [x] Component file (`Button.tsx`)
- [x] Unit tests file ( `Button.test.tsx`)

When making a new component please imitate the same code structure already present in other components, so the source code
in this project stays consistent.

Once your component it's ready you can expose it in `src/index.ts` by adding:

```ts
// assuming <PieChart /> is the new component you made
export { default as PieChart } from './components/PieChart/PieChart';
```

## Commit Messages

This repository follows the [**conventional commits specification**](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification).

You can use the following command to ensure your commit message adheres to these standards:

```bash
pnpm commit
```

## Release process

The **conventional commits** standard allows us to automate the releases of this library.

- **fix**: create a PATCH release
- **feat**: MINOR release
- **BREAKING CHANGE**: a commit that has a footer BREAKING CHANGE = MAJOR release
- Additional types (build, chore, ci, docs, style, refactor, perf, test, improvement) **will not create a release** (unless
  they include a BREAKING CHANGE).

We use [`semantic-release`](https://github.com/semantic-release/semantic-release).

<details>
  <summary>More details</summary>

These are the steps that are automated:

| Step                  | Description                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Verify conditions** | Verify all the conditions to proceed with the release.                                                                          |
| **Get last release**  | Obtain the commit corresponding to the last release by analyzing [Git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging). |
| **Analyze commits**   | Determine the type of release based on the format of the commits added since the last release.                                  |
| **Verify release**    | Verify the release conformity.                                                                                                  |
| **Generate notes**    | Generate release notes for the commits added since the last release.                                                            |
| **Create Git tag**    | Create a Git tag corresponding to the new release version.                                                                      |
| **Prepare**           | Prepare the release.                                                                                                            |
| **Publish**           | Publish the release.                                                                                                            |
| **Notify**            | Notify of new releases or errors.                                                                                               |

Additionally, we use the following packages:

| Package                       | Description                                                                                                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@semantic-release/changelog` | Semantic-release plugin to create or update a changelog file.                                                                                                                       |
| `@semantic-release/git`       | Semantic-release plugin responsible the update the package version with the next version                                                                                            |
| `@semantic-release/github`    | Semantic-release plugin to generates the artifacts for every release (download files), publish a new release, adds comments to github issues or PR and/or generates an Github issue |
| `gh-pages`                    | Deployment of the docs of this library                                                                                                                                              |

</details>

## Prerelease (AKA beta release)

Please use **a prerelease only for**:

- Getting feedback on major versions before releasing them
- Getting feedback on APIs for new features

### Process

To release a new major prerelease:

```bash
git checkout -b milestone/2.0.0 # Create a new branch for the next major version assuming you are in v2.x
pnpm compile
pnpm version premajor # This will create 2.0.0-0
git push origin milestone/4.0.0
pnpm publish --tag next # Publish to https://www.npmjs.com/package/@zopauk/react-components
```

To release another iteration of the prerelease:

```bash
pnpm compile
pnpm version prerelease # This will create 2.0.0-1 assuming you are in 2.0.0-0
```

Get the new prerelease version on your app:

```bash
pnpm add @zopauk/react-components@next
```

Docs: [Semantic versioning](https://semver.org/) | [`pnpm version`](https://classic.yarnpkg.com/en/docs/cli/version) |
[`pnpm publish`](https://pnpm.io/cli/publish) | [`pnpm publish --tag`](https://pnpm.io/cli/publish#--tag-tag)
