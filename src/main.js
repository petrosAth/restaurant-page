import toggleBackground from './modules/toggleBackground';
import './stylesheets/main.scss';
import webpackLogo from './assets/images/webpack-logo.png';

const logoImg = document.getElementById('webpackLogo');
logoImg.src = webpackLogo;

const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', toggleBackground);
