import header from './pages/header';
import nav from './pages/nav';
import { main, setMain } from './pages/main';
import footer from './pages/footer';

const pageLoad = (() => {
  header();
  nav();
  main();
  footer();

  return setMain;
})();

export default pageLoad;
