class FavoriteRestaurantPresenter {
  constructor({ view, favoriteRestaurant }) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;

    this._showFavoriteRestaurant();
    this._listenToSearchRequest();
  }

  async _showFavoriteRestaurant() {
    const restaurants = await this._favoriteRestaurant.getAllRestaurants();
    this._displayRestaurants(restaurants);
  };

  _displayRestaurants(restaurants) {
    this._view.showRestaurant(restaurants);
  }

  _listenToSearchRequest() {
    this._view.runWhenSearching((latestQuery) => {
      this.searchRestaurant(latestQuery);
    });
  };

  async searchRestaurant(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundRestaurant;
    if (this._latestQuery.length > 0) {
      foundRestaurant = await this._favoriteRestaurant.searchRestaurants(this._latestQuery);
    } else {
      foundRestaurant = await this._favoriteRestaurant.getAllRestaurants();
    }
    this._showFoundRestaurant(foundRestaurant);
  }

  _showFoundRestaurant(foundRestaurant) {
    this._view.showRestaurant(foundRestaurant);
  };
};

export default FavoriteRestaurantPresenter;
