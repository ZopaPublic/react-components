import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  /* Alverata */
  @font-face {
    font-family: 'Alverata';
    font-display: swap;
    /* IE9 Compat Modes */
    src: local('Alverata'), 
         url('https://s3-eu-west-1.amazonaws.com/cdn.zopa.com/fonts/1333416/2dc6ef4b-6ad7-4da6-b898-2ea5e967e712.eot');
    /* IE6-IE8 */
    src: local('Alverata'),
         url('https://s3-eu-west-1.amazonaws.com/cdn.zopa.com/fonts/1333416/2dc6ef4b-6ad7-4da6-b898-2ea5e967e712.eot?#iefix')
         format('eot'),
         /* Super Modern Browsers */
         url('https://s3-eu-west-1.amazonaws.com/cdn.zopa.com/fonts/1333416/42b8e48a-c882-4831-856e-4e1f148b3169.woff2')
         format('woff2'),
         /* Pretty Modern Browsers */
         url('https://s3-eu-west-1.amazonaws.com/cdn.zopa.com/fonts/1333416/99d874d5-3f1c-419c-9c82-4c63e62f98ca.woff')
         format('woff'),
         /* Safari, Android, iOS */
         url('https://s3-eu-west-1.amazonaws.com/cdn.zopa.com/fonts/1333416/c41ae233-742a-4c14-af50-6b0e62e12a58.ttf')
         format('truetype');
  }

  /* Open Sans */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
`;

export default Fonts;
