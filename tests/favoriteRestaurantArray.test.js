import { describe, afterEach } from '@jest/globals';
import { itActsAsPreferredRestaurantModel } from './contracts/favoriteContract';

let preferredRestaurants = [];

const preferredRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    return preferredRestaurants.find((Restaurant) => Restaurant.id == id);
  },

  getAllRestaurants() {
    return preferredRestaurants;
  },

  putRestaurant(Restaurant) {

    if (!Restaurant.hasOwnProperty('id')) {
      return;
    }
    // pastikan id ini belum ada dalam daftar preferredRestaurants
    if (this.getRestaurant(Restaurant.id)) {
      return;
    }
    preferredRestaurants.push(Restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id

    preferredRestaurants = preferredRestaurants.filter((Restaurant) => Restaurant.id != id);
  },

  async searchRestaurants(query) {
    return (this.getAllRestaurants()).filter((Restaurant) => {
      const _restaurantName = ((Restaurant.name || '-').toLowerCase()).replace(/\s/g, '');
      const _query = (query.toLowerCase()).replace(/\s/g, '');
      return _restaurantName.indexOf(_query) !== -1;
    });
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    preferredRestaurants = [];
  });
  itActsAsPreferredRestaurantModel(preferredRestaurantArray);
});
