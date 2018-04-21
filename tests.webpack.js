import 'core-js/es5';
import './src/common/polyfills';
const context = require.context('./src', true, /_test\.js$/);
context.keys().forEach(context);
