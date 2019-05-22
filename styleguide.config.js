'use strict';

const { version } = require('./package');
const path = require('path');
const kleur = require('kleur');
const webpackDevServerUtils = require('react-dev-utils/WebpackDevServerUtils');

const printServerInstructions = config => {
  const urls = webpackDevServerUtils.prepareUrls('http', config.serverHost, config.serverPort);
  console.log(`${kleur.cyan().bold(`
/££££££££                              
|_____ ££                                      
     /££/   /££££££   /££££££   /££££££ 
    /££/   /££__  ££ /££__  ££ |____  ££
   /££/   | ££  \\ ££| ££  \\ ££  /£££££££
  /££/    | ££  | ££| ££  | ££ /££__  ££
 /££££££££|  ££££££/| £££££££/|  £££££££
|________/ \\______/ | ££____/  \\_______/
                    | ££                
                    | ££          React Components       
                    |__/`)}     
                    
${kleur.italic('You can now view your style guide in the browser')}

${kleur.bold('Local:')}            ${urls.localUrlForTerminal}
    `);

  if (urls.lanUrlForTerminal) {
    console.log(`${kleur.bold('On your network:')}  ${urls.lanUrlForTerminal}
      `);
  }
};

module.exports = {
  title: 'React components',

  // Version number in sidebar
  version,

  // If set to true, each section will be single page.
  pagePerSection: true,

  // Sections of the documentation
  sections: [
    {
      name: 'Introduction',
      content: 'src/README.md',
    },
    {
      name: 'Content',
      content: 'src/content/README.md',
      components: 'src/content/**/*.{js,jsx,ts,tsx}',
      ignore: 'src/content/**/*constants.{js,jsx,ts,tsx}',
    },
    {
      sectionDepth: 1,
      name: 'Components',
      content: 'src/components/README.md',
      components: 'src/components/*/*.{js,jsx,ts,tsx}',
      sections: [
        {
          name: 'Atoms',
          content: 'src/components/atoms/README.md',
          components: 'src/components/atoms/*/*.{js,jsx,ts,tsx}',
          ignore: '**/*.test.{js,jsx,ts,tsx}',
        },
        {
          name: 'Molecules',
          content: 'src/components/molecules/README.md',
          components: 'src/components/molecules/*/*.{js,jsx,ts,tsx}',
          ignore: ['**/*.test.{js,jsx,ts,tsx}', '**/Nav/**', '**/modalStyles.ts'],
        },
        {
          name: 'Organisms',
          content: 'src/components/organisms/README.md',
          components: 'src/components/organisms/*/*.{js,jsx,ts,tsx}',
          ignore: ['**/{Navbar,Accordion}/**', '**/*.test.{js,jsx,ts,tsx}'],
          sections: [
            {
              name: 'Navbar',
              components: 'src/components/organisms/Navbar/**/*.{js,jsx,ts,tsx}',
              ignore: ['**/*.test.{js,jsx,ts,tsx}'],
            },
            {
              name: 'Accordion',
              components: 'src/components/organisms/Accordion/**/*.{js,jsx,ts,tsx}',
              ignore: ['**/*.test.{js,jsx,ts,tsx}'],
            },
          ],
        },
        {
          name: 'Icons',
          content: 'src/components/icons/README.md',
          components: 'src/components/icons/**/*.{js,jsx,ts,tsx}',
          ignore: '**/*.test.{js,jsx,ts,tsx}',
        },
        {
          name: 'Typography',
          content: 'src/components/typography/README.md',
          components: 'src/components/typography/*/*.{js,jsx,ts,tsx}',
          ignore: '**/*.test.{js,jsx,ts,tsx}',
        },
        {
          name: 'Layout',
          content: 'src/components/layout/README.md',
          components: 'src/components/layout/*/*.{js,jsx,ts,tsx}',
          ignore: ['**/*.test.{js,jsx,ts,tsx}'],
        },
      ],
    },
  ],
  template: {
    favicon: 'https://s3-eu-west-1.amazonaws.com/cdn.zopa.com/images/201601215/favicon.ico',
  },
  theme: {
    maxWidth: '100%',
    color: {
      sidebarBackground: '#1C2139',
    },
    fontFamily: {
      base: '"Open Sans", sans-serif',
    },
    fontSize: {
      base: 14,
      text: 16,
      small: 13,
      h1: 48,
      h2: 32,
      h3: 24,
      h4: 18,
      h5: 16,
      h6: 16,
    },
  },
  // Override Styleguidist components
  styleguideComponents: {
    ComponentsListRenderer: path.resolve(__dirname, './src/styleguide-components/ComponentsList'),
    HeadingRenderer: path.resolve(__dirname, './src/styleguide-components/Heading'),
    LogoRenderer: path.resolve(__dirname, './src/styleguide-components/Logo'),
    PathlineRenderer: path.resolve(__dirname, './src/styleguide-components/Pathline'),
    StyleGuideRenderer: path.resolve(__dirname, './src/styleguide-components/StyleGuide'),
    VersionRenderer: path.resolve(__dirname, './src/styleguide-components/Version'),
  },
  // Used to convert type definitions to documentation. More info: https://github.com/styleguidist/react-docgen-typescript
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    propFilter: prop => prop.parent && !prop.parent.fileName.includes('@types/react'),
  }).parse,
  // Modules available for examples
  context: {
    colors: path.resolve(__dirname, './src/constants/colors'),
  },
  moduleAliases: {
    'zopa-react-components': path.resolve(__dirname, 'src'),
  },
  printServerInstructions,
  ribbon: {
    url: 'https://github.com/zopaUK/react-components',
    text: 'Fork me!',
  },

  ignore: ['**/*.test.{js,jsx,ts,tsx}', '**/*.d.ts', '**/src/styleguide-components/**', '**/styleguide/**'],
  // Webpack configuration
  webpackConfig: require('react-scripts/config/webpack.config.dev'),
  // props table config
  usageMode: 'expand',

  skipComponentsWithoutExample: true,
};
