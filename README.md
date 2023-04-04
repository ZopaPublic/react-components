# React components

<img src="./etc/images/turtle.gif" />

![CI/CD](https://github.com/zopaUK/react-components/workflows/CI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Dependencies - Always up to date](https://img.shields.io/badge/always-up_to_date-brightgreen.svg)](https://help.github.com/en/articles/configuring-automated-security-fixes)

Shared react styled components for all the Zopa projects.

This repo contains 2 things at the same time:

- The Typescript library for the react components

- Documentation for the components managed with [React-styleguidist](https://react-styleguidist.js.org)

[Check the docs 💕](https://zrc.netlify.app/)

## Migrating from version 3

There are a number of breaking changes which will need to be addressed when upgrading from Zopa React Components v3 to v4.

[The migration guide](/etc/docs/migration-v4.md) will walk you through the major changes such as colours and typography.

## Installation

```bash
git clone https://github.com/zopaUK/react-components.git
pnpm i
```

## Running the project

Execute the development environment:

```bash
pnpm dev
```

The docs will run at [localhost:6060](http://localhost:6060).

## Local development (working on a linked application)

We start a watcher using [esbuild](https://esbuild.github.io/) and [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) by running:

```bash
pnpm dev:code
```

Your locally running app will have its own way of linking to local dependencies but making changes in react-components codebase should now show in the application.

## Motivation

The aim of this project is to share with the frontend community how we code in Zopa.

We think it might be useful for someone who wants to start a new react components library and want to re-use some of our code.

## Types

You can access typings for specific components under `@zopauk/react-components/types`:

```tsx
import { Button } from '@zopauk/react-components';
import { IButtonProps } from '@zopauk/react-components/types/components/atoms/Button';
```

To inspect the folder structure within `@zopauk/react-components/types` you can run `yarn compile:types` and navigate the generated `types/` folder in the project root.

## Contributing

In case you want to contribute to this library, please have a look at our [contributing guidelines](./CONTRIBUTING.md) 🙌🏼

## Contributors

<!-- readme: collaborators,contributors,semantic-release-bot/-,renovate-bot/- -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/poteirard">
            <img src="https://avatars.githubusercontent.com/u/7198934?v=4" width="50;" alt="poteirard"/>
            <br />
            <sub><b>poteirard</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/thegrinder">
            <img src="https://avatars.githubusercontent.com/u/14250944?v=4" width="50;" alt="thegrinder"/>
            <br />
            <sub><b>thegrinder</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/moshie">
            <img src="https://avatars.githubusercontent.com/u/3974301?v=4" width="50;" alt="moshie"/>
            <br />
            <sub><b>moshie</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/raff-r">
            <img src="https://avatars.githubusercontent.com/u/1081070?v=4" width="50;" alt="raff-r"/>
            <br />
            <sub><b>raff-r</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/lluia">
            <img src="https://avatars.githubusercontent.com/u/5938217?v=4" width="50;" alt="lluia"/>
            <br />
            <sub><b>lluia</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/dfvalero">
            <img src="https://avatars.githubusercontent.com/u/337955?v=4" width="50;" alt="dfvalero"/>
            <br />
            <sub><b>dfvalero</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/Gabss405">
            <img src="https://avatars.githubusercontent.com/u/67011746?v=4" width="50;" alt="Gabss405"/>
            <br />
            <sub><b>Gabss405</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/admmasters">
            <img src="https://avatars.githubusercontent.com/u/335607?v=4" width="50;" alt="admmasters"/>
            <br />
            <sub><b>admmasters</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/JuliaHempel">
            <img src="https://avatars.githubusercontent.com/u/9414476?v=4" width="50;" alt="JuliaHempel"/>
            <br />
            <sub><b>JuliaHempel</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/OlenaKashuba">
            <img src="https://avatars.githubusercontent.com/u/27281884?v=4" width="50;" alt="OlenaKashuba"/>
            <br />
            <sub><b>OlenaKashuba</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/katebeavis">
            <img src="https://avatars.githubusercontent.com/u/10133018?v=4" width="50;" alt="katebeavis"/>
            <br />
            <sub><b>katebeavis</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/calvin-fung-zopa">
            <img src="https://avatars.githubusercontent.com/u/91553062?v=4" width="50;" alt="calvin-fung-zopa"/>
            <br />
            <sub><b>calvin-fung-zopa</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/gbkr">
            <img src="https://avatars.githubusercontent.com/u/1077355?v=4" width="50;" alt="gbkr"/>
            <br />
            <sub><b>gbkr</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/endymion1818">
            <img src="https://avatars.githubusercontent.com/u/2216344?v=4" width="50;" alt="endymion1818"/>
            <br />
            <sub><b>endymion1818</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/emilfjellstrom">
            <img src="https://avatars.githubusercontent.com/u/11654513?v=4" width="50;" alt="emilfjellstrom"/>
            <br />
            <sub><b>emilfjellstrom</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/MillieClare">
            <img src="https://avatars.githubusercontent.com/u/40922831?v=4" width="50;" alt="MillieClare"/>
            <br />
            <sub><b>MillieClare</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/charlielizzy">
            <img src="https://avatars.githubusercontent.com/u/93588638?v=4" width="50;" alt="charlielizzy"/>
            <br />
            <sub><b>charlielizzy</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/steedems">
            <img src="https://avatars.githubusercontent.com/u/7896422?v=4" width="50;" alt="steedems"/>
            <br />
            <sub><b>steedems</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/tlaak">
            <img src="https://avatars.githubusercontent.com/u/1674055?v=4" width="50;" alt="tlaak"/>
            <br />
            <sub><b>tlaak</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/khumbon">
            <img src="https://avatars.githubusercontent.com/u/44274000?v=4" width="50;" alt="khumbon"/>
            <br />
            <sub><b>khumbon</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/t-phamm">
            <img src="https://avatars.githubusercontent.com/u/86316479?v=4" width="50;" alt="t-phamm"/>
            <br />
            <sub><b>t-phamm</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/TomGroombridge">
            <img src="https://avatars.githubusercontent.com/u/5918265?v=4" width="50;" alt="TomGroombridge"/>
            <br />
            <sub><b>TomGroombridge</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/rominamoya">
            <img src="https://avatars.githubusercontent.com/u/1150925?v=4" width="50;" alt="rominamoya"/>
            <br />
            <sub><b>rominamoya</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/stephanie-senoner">
            <img src="https://avatars.githubusercontent.com/u/118994357?v=4" width="50;" alt="stephanie-senoner"/>
            <br />
            <sub><b>stephanie-senoner</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/rorydpayne">
            <img src="https://avatars.githubusercontent.com/u/7081561?v=4" width="50;" alt="rorydpayne"/>
            <br />
            <sub><b>rorydpayne</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/MichelleXBai">
            <img src="https://avatars.githubusercontent.com/u/92802325?v=4" width="50;" alt="MichelleXBai"/>
            <br />
            <sub><b>MichelleXBai</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Blimeys">
            <img src="https://avatars.githubusercontent.com/u/13405542?v=4" width="50;" alt="Blimeys"/>
            <br />
            <sub><b>Blimeys</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/grabbeh">
            <img src="https://avatars.githubusercontent.com/u/641299?v=4" width="50;" alt="grabbeh"/>
            <br />
            <sub><b>grabbeh</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors,semantic-release-bot/-,renovate-bot/- -end -->

## License

This repository is [MIT-licensed](./LICENSE).

## Trade marks

No permission is granted to use the trade names, trade marks, service marks, or product names of Zopa, except as required for reasonable and customary use in describing the origin of this library and reproducing the content of the notice in the [license](./LICENSE).

## Fonts

Zopa uses Open Sans in its sites and applications. If you want to make use of this font outside of Zopa, you will need to license it directly from [Google Fonts](https://fonts.google.com/).
