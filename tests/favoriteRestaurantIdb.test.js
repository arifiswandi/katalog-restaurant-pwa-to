import { describe, afterEach } from '@jest/globals';
import { itActsAsPreferredRestaurantModel } from './contracts/favoriteContract';
import preferredRestaurantIdb from '../src/scripts/data/favorite-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await preferredRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await preferredRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });
  itActsAsPreferredRestaurantModel(preferredRestaurantIdb);
});
