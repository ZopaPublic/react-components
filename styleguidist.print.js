'use strict';
const kleur = require('kleur');
const webpackDevServerUtils = require('react-dev-utils/WebpackDevServerUtils');

const printServerInstructions = (config) => {
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

module.exports = { printServerInstructions };
