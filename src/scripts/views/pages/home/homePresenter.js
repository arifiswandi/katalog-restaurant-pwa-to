class HomePresenter {
  constructor({ view, restaurantDb }) {
    this._view = view;
    this._restaurantDb = restaurantDb;

    this._showHomeRestaurant();
  }
  async _showHomeRestaurant() {
    const restaurantList = await this._restaurantDb.listRestaurant();
    this._view.showRestaurant(restaurantList.restaurants);
  }

}

export default HomePresenter;