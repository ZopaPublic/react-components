# Contributing

Keep in mind that these components are very focused on the ZOPA design system.

Any change can be refused if that change breaks with any of the company internal decisions.
If you still want to go ahead with those changes you can always fork the project.

Please make sure you have a read to our [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting any contribution.

## Table of Contents 🗒

- [Documentation](#documentation)
- [Tracking progress](#tracking-progress)
- [Add components](#adding-new-components)
- [Project structure](#project-structure)
- [Testing](#testing)
- [Commit messages](#git-commit-messages)
- [Release process](#release-process)
- [Beta releases](#beta-releases)

## Documentation ✍️

Helping people with issues or writing docs are definitely the best ways to get started with this project.

## Tracking progress 📈

For this repo we are use a mix of Github issues and a private JIRA board (only accessible to Zopa employees).

A ticket or issue reference must be attached in the description of any pull request.

Please help reviewers by documenting you PR extensively with screenshots and the rationale behind it.

## Project Structure 🎒

Components should live in `src/components`, their own folder and contain the following files:

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

Please follow the same code structure within the file found in the rest of the project.

Once your component it's ready, expose it in `src/index.ts` by adding:

```ts
export { default as Button } from './components/Button/Button';
```

## Git Commit Messages 💬

The repository follows the **conventional commits specification**.

You can [read the specs here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification).

You can use the following command to help you write your commit message following these standards:

```bash
yarn commit
```

## Release process 🚀

The conventional commits standard allows us to automate package releases.

[`semantic-release`](https://github.com/semantic-release/semantic-release) is the tool we are using for automatically releases, doing the following steps:

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

Additionally we added the following plugins/steps:

| Package                       | Description                                                                                                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@semantic-release/changelog` | Semantic-release plugin to create or update a changelog file.                                                                                                                       |
| `@semantic-release/git`       | Semantic-release plugin responsible the update the package version with the next version                                                                                            |
| `@semantic-release/github`    | Semantic-release plugin to generates the artifacts for every release (download files), publish a new release, adds comments to github issues or PR and/or generates an Github issue |
| `gh-pages`                    | Deployment for the styleguide                                                                                                                                                       |

## Beta releases 🍉

### Conventions

👍🏻 &nbsp;Please use **beta releases with care and mostly for**:

- [x] getting feedback on major versions before releasing them
- [x] getting feedback on APIs for new features

👎🏻 &nbsp;Don't use beta releases for testing patches/fixes on this library

We rely on a manual process for releasing beta versions of this library ( _this could be automated in a near future..._ ).

We use the following naming convention for **beta releases**:

```js
`${upcomingVersion}--beta.${currentBetaIteration}`;
```

For instance, `4.0.0--beta.4` translates to the **4th beta iteration** of the next major version `4.0.0`.

### Process

To release a beta iteration of your upcoming version:

1. Let's update the version of the library:

```
# assuming we're in 3.8.0
$ yarn version --new-version 4.0.0--beta.1
```

2. Let's compile the source code

```
# this should create the /es /types and /cjs directories on the project root
$ yarn compile
```

3. Let's push our changes so we can tie this beta release to a point in the Git history:

```
# always do a beta release from a feature branch, never from master!
$ git push origin milestone/4.0.0
```

4. Let's publish the package on NPM on the `next` tag (the one we use to publish betas):

```
# if you're not part of Zopa NPM organization you'll need to request access to be able to publish
$ npm publish --tag next
```

5. Now clients of this library can try the beta release doing:

```
$ yarn add @zopauk/react-components@next
```

### Further reading

- [Semantic versioning](https://semver.org/)
- [NPM distribution tags](https://docs.npmjs.com/adding-dist-tags-to-packages)
- [`npm version`](https://docs.npmjs.com/cli/version)
- [`npm publish`](https://docs.npmjs.com/cli-commands/publish.html)
