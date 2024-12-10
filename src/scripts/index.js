import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './components';
import '../styles/main.css';
import '../styles/responsive.css';

import App from '../scripts/views/app';
import swRegister from './utils/sw-register.js';


const app = new App({
  button: document.querySelector('#hamburger-btn'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

console.log('Hello Coders!', new Date().toISOString());