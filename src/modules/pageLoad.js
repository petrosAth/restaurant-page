import header from './pages/header';
import nav from './pages/nav';
import { main, changeMain } from './pages/main';
import footer from './pages/footer';

const pageLoad = (() => {
  header();
  nav();
  main();
  footer();

  return changeMain;
})();

export default pageLoad;
