/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import './src/assets/scss/app.scss';
import Prism from 'prism-react-renderer/prism';
(typeof global !== 'undefined' ? global : window).Prism = Prism;

// You can delete this file if you're not using it
require('prismjs/themes/prism-dark.css');
require('prismjs/components/prism-lua');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('./src/components/docs/pageLayout/infima.css');
