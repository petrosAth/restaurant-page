import header from './pages/header';
import nav from './pages/nav';
import mainHome from './pages/mainHome';
import mainMenu from './pages/mainMenu';
import mainContactUs from './pages/mainContactUs';
import footer from './pages/footer';

const pageLoad = (page) => {
  const main = {
    home: () => mainHome(),
    menu: () => mainMenu(),
    contactUs: () => mainContactUs(),
  };

  const layout = (page) => {
    header();
    nav();
    main[page]();
    footer();
  };

  layout(page);
};

export default pageLoad;
