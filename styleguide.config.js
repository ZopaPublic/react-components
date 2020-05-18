'use strict';
const { version } = require('./package');
const path = require('path');
const kleur = require('kleur');
const webpackDevServerUtils = require('react-dev-utils/WebpackDevServerUtils');

// Make react-scripts get the eslint config
process.env.EXTEND_ESLINT = 'true';

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
      components: 'src/content/**/*.tsx',
    },
    {
      name: 'Hooks',
      content: 'src/hooks/README.md',
      components: 'src/hooks/**/*.ts',
      ignore: 'src/hooks/**/{index,types,context}.ts',
    },
    {
      sectionDepth: 2,
      name: 'Components',
      content: 'src/components/README.md',
      sections: [
        {
          name: 'Atoms',
          content: 'src/components/atoms/README.md',
          components: 'src/components/atoms/*/*.tsx',
        },
        {
          name: 'Molecules',
          content: 'src/components/molecules/README.md',
          components: 'src/components/molecules/*/*.tsx',
        },
        {
          name: 'Organisms',
          content: 'src/components/organisms/README.md',
          sections: [
            {
              name: 'Navbar',
              content: 'src/components/organisms/Navbar/README.md',
              components: 'src/components/organisms/Navbar/**/[A-Z]*.tsx',
            },
            {
              name: 'Accordion',
              content: 'src/components/organisms/Accordion/README.md',
              components: 'src/components/organisms/Accordion/**/[A-Z]*.tsx',
            },
            {
              name: 'Form',
              content: 'src/components/organisms/Form/README.md',
              components: 'src/components/organisms/Form/**/[A-Z]*.tsx',
            },
            {
              name: 'Card',
              content: 'src/components/organisms/Card/README.md',
              components: 'src/components/organisms/Card/**/[A-Z]*.tsx',
            },
          ],
        },
        {
          name: 'Layout',
          content: 'src/components/layout/README.md',
          components: 'src/components/layout/*/*.tsx',
        },
      ],
    },
  ],
  template: {
    favicon: 'https://s3-eu-west-1.amazonaws.com/cdn.zopa.com/images/201601215/favicon.ico',
  },
  theme: {
    color: {
      codeBackground: '#F5F5F5;',
      link: '#00B9A7',
      linkHover: '#00B9A7',
    },
    fontFamily: {
      monospace: 'Monaco, Menlo, Courier, monospace',
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
    TableRenderer: path.resolve(__dirname, './src/styleguide-components/Table'),
    VersionRenderer: path.resolve(__dirname, './src/styleguide-components/Version'),
  },
  // Used to convert type definitions to documentation. More info: https://github.com/styleguidist/react-docgen-typescript
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    propFilter: prop => prop.parent && !prop.parent.fileName.includes('@types/react'),
    componentNameResolver: (exp, source) => path.parse(source.fileName).name,
  }).parse,
  // Modules available for examples
  context: {
    colors: path.resolve(__dirname, './src/constants/colors'),
  },
  moduleAliases: {
    '@zopauk/react-components': path.resolve(__dirname, 'src'),
  },
  printServerInstructions,
  // props table config
  usageMode: 'expand',

  skipComponentsWithoutExample: true,
};
