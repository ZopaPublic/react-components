# Contributing to Zopa React Components 🙋🏻

We would love for you to contribute to our shared effort on **Zopa React Components** and help make it even better.

Keep in mind that these components are very focused on the Zopa product/design guidelines. So any change can be refused
if that change breaks with any of the company internal decisions. If you still want to go ahead with those changes you
can fork the project.

Please also read our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing to the project.

## Table of Contents

- [Documentation](#documentation)
- [Tracking progress](#tracking-progress)
- [Add components](#adding-new-components)
- [Project structure](#project-structure)
- [Testing](#testing)
- [Commit messages](#git-commit-messages)
- [Release process](#release-process)

### Documentation

Helping people with issues or writing docs are definitely the best ways to get started with this project.

### Tracking progress

For this repo we are using the Frontend Jira board (hosted internally in Zopa). A ticket must be attached in the description of any pull request.

### Adding new components (only available for Zopians)

We recommend to stick with the following process when adding new components to this library:

_( The aim of it is to ensure that components added to this library solve common needs between different Zopa projects )_

#### 1. Get feedback in the Zopa Slack 💬

Ask in one of the following Slack channels:

- `#dev-frontend`
- `#ui-kit-web`

whether other projects would benefit from the component you want to add.

#### 2. Get it designed 🦄

Find a Zopa a designer to make a design of the component so we can agree on visuals and interactions.

_\* Once it's ready make sure it gets uploaded to [Marvel](https://marvelapp.com/9hj9j4b)_

#### 3. Discuss the API 🤙🏼

Open an issue on this repository describing the component we want to add, proposing an API for it and illustrating possible implementation challenges.

_\* Don't forget to link to the actual design of the component in Marvel!_

#### 4. Code 🎸

Go and do the actual coding!

Make sure you do granular commits and you add contextual descriptions to them.

Once it's ready, ping the FE team for review.

### Project Structure

Components should live in `src/components`, live on their own folder and contain the following files:

```
src/
  components/
    Button/
      Button.md
      Button.tsx
      Button.test.tsx
```

- Markdown file ( `Button.md` )
  - documenting the component.
    - keep in mind that most of the documentation is provided magically from the TS types and JSDoc.
  - an example of how to use the component
    - just add the JSX with the prefix of a 4 spaces ([markdown code block](http://markdown-guide.readthedocs.io/en/latest/basics.html#code-block)).
- Component file ( `Button.tsx` )
  - contains the implementation of the component
    - try to adhere to our React component best practices ( **@TODO** )
- Unit tests file ( `Button.test.tsx`)
  - try to account for side effects and edge cases
  - stick to test the API rather than implementation details
  - use `jest-axe` for testing the accessibility. Check tests for a working example.

Once it's ready, expose the new component in `src/index.ts` by adding:

```ts
export { default as Button } from './components/Button/Button';
```

_\* Note that SVGs need to be optimized with [this tool](https://jakearchibald.github.io/svgomg/) before being added in the code._

### Testing

This project does **NOT** use [Snapguidist](https://github.com/styleguidist/snapguidist) because it does not support
styled-components and CI.

For more info check the issues [snapguidist#18](https://github.com/styleguidist/snapguidist/issues/18)
and [snapguidist#16](https://github.com/styleguidist/snapguidist/issues/16)

Instead we use jest and babel and snapshot testing.

### Git Commit Messages

The repository follows the **conventional commits specification**. You can [read the specs here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification)

You can use the following command to help you write your commit message following the standard:

```bash
yarn commit
```

### Release process

The conventional commits standard allows us to automate package releases.

[semantic-release](https://github.com/semantic-release/semantic-release) is the tool we are using for automatically release and it does the following steps:

| Step              | Description                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Verify Conditions | Verify all the conditions to proceed with the release.                                                                          |
| Get last release  | Obtain the commit corresponding to the last release by analyzing [Git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging). |
| Analyze commits   | Determine the type of release based on the format of the commits added since the last release.                                  |
| Verify release    | Verify the release conformity.                                                                                                  |
| Generate notes    | Generate release notes for the commits added since the last release.                                                            |
| Create Git tag    | Create a Git tag corresponding to the new release version.                                                                      |
| Prepare           | Prepare the release.                                                                                                            |
| Publish           | Publish the release.                                                                                                            |
| Notify            | Notify of new releases or errors.                                                                                               |

Additionally we added the following plugins/steps:

| Package                     | Description                                                                                                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @semantic-release/changelog | Semantic-release plugin to create or update a changelog file.                                                                                                                       |
| @semantic-release/git       | Semantic-release plugin responsible the update the package version with the next version                                                                                            |
| @semantic-release/github    | Semantic-release plugin to generates the artifacts for every release (download files), publish a new release, adds comments to github issues or PR and/or generates an Github issue |
| gh-pages                    | Deployment for the styleguide                                                                                                                                                       |

### Beta releases

#### Conventions

👍🏻 &nbsp;Please use **beta releases with care and mostly for**:

- [x] getting feedback on major versions before releasing them
- [x] getting feedback on APIs for new features

👎🏻 &nbsp;Don't use beta releases for testing patches/fixes on this library

We rely on a manual process for releasing beta versions of this library.
( _this could be automated in a near future..._ )

We use the following naming convention for **beta releases**:

```js
`${upcomingVersion}--beta.${currentBetaIteration}`;
```

For instance if `4.0.0--beta.4` means it's the **4th beta iteration** of the major version `4.0.0`.

#### Process

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

#### Further reading

- [Semantic versioning](https://semver.org/)
- [NPM distribution tags](https://docs.npmjs.com/adding-dist-tags-to-packages)
- [`npm version`](https://docs.npmjs.com/cli/version)
- [`npm publish`](https://docs.npmjs.com/cli-commands/publish.html)
