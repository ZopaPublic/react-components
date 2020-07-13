# React components

<img src="./etc/images/turtle.gif" />

[![CircleCI](https://circleci.com/gh/zopaUK/react-components/tree/master.svg?style=svg)](https://circleci.com/gh/zopaUK/react-components/tree/master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Dependencies - Always up to date](https://img.shields.io/badge/always-up_to_date-brightgreen.svg)](https://help.github.com/en/articles/configuring-automated-security-fixes)

Shared react styled components for all the Zopa projects.

This repo contains 2 things at the same time:

- The Typescript library for the react components

- Documentation for the components managed with [React-styleguidist](https://react-styleguidist.js.org)

[Check the docs 💕](https://zopauk.github.io/react-components/)

### Migrating from version 3

There are a number of breaking changes which will need to be addressed when upgrading from Zopa React Components v3 to v4.

[The migration guide](/etc/docs/migration-v4.md) will walk you through the major changes such as colours and typography.

### Installation

```
$ git clone https://github.com/zopaUK/react-components.git
$ yarn
```

### Running the project

Execute the development environment:

```
$ yarn dev
```

The docs will run at [localhost:6060](http://localhost:6060).

### Motivation

The aim of this project is to share with the frontend community how we code in Zopa.

We think it might be useful for someone who wants to start a new react components library and want to re-use some of our code.

### Types

You can access typings for specific components under `@zopauk/react-components/types`:

```tsx
import { Button } from '@zopauk/react-components';
import { IButtonProps } from '@zopauk/react-components/types/components/atoms/Button';
```

To inspect the folder structure within `@zopauk/react-components/types` you can run `yarn compile:types` and navigate the generated `types/` folder in the project root.

## Contributing

In case you want to contribute to this library, please have a look at our [contributing guidelines](./CONTRIBUTING.md) 🙌🏼

## License

This repository is [MIT-licensed](./LICENSE).

## Trade marks

No permission is granted to use the trade names, trade marks, service marks, or product names of Zopa, except as required for reasonable and customary use in describing the origin of this library and reproducing the content of the notice in the [license](./LICENSE).

## Fonts

Zopa uses Open Sans in its sites and applications. If you want to make use of this font outside of Zopa, you will need to license it directly from [Google Fonts](https://fonts.google.com/).
