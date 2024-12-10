import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbData = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    return (await dbData).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    return (await dbData).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {

    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    return (await dbData).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbData).delete(OBJECT_STORE_NAME, id);
  },

  async searchRestaurants(query) {
    return (await this.getAllRestaurants()).filter((restaurant) => {
      const restaurantName = (restaurant.name || '-').toLowerCase().replace(/\s/g, '');
      const restaurantQuery = (query.toLowerCase()).replace(/\s/g, '');
      return restaurantName.indexOf(restaurantQuery) !== -1;
    });
  },
};

export default FavoriteIdb;