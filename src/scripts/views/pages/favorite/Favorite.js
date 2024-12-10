import FavoriteIdb from '../../../data/favorite-idb';
import getFavoriteContainer from './FavoriteRestaurantView';
import favoriteRestaurantPresenter from './FavoriteRestaurantPresenter';

const view = new getFavoriteContainer;

const FavoriteRestaurant = {
  async render() {
    return view.getFavoriteContainer();
  },
  async afterRender() {
    // todo

    new favoriteRestaurantPresenter({
      view,
      favoriteRestaurant: FavoriteIdb,
    });

    const loaderContainer = document.querySelector('loading-component');
    loaderContainer.style.display = 'none';
  },
};

export default FavoriteRestaurant;