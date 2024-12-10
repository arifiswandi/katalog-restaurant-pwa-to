import RestaurantDb from '../../../data/restaurantDb';
import HomeView from './HomeView';
import HomePresenter from './homePresenter';

const view = new HomeView;

const Home = {
  async render() {
    return view.getHomeContainer();
  },

  async afterRender() {
    new HomePresenter({
      view,
      restaurantDb: RestaurantDb,
    });

    const loaderContainer = document.querySelector('loading-component');
    loaderContainer.style.display = 'none';
  },
};

export default Home;