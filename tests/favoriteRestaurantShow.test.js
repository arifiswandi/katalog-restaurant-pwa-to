import { describe, beforeEach, it, expect, jest } from '@jest/globals';
import FavoritePresenter from '../src/scripts/views/pages/favorite/FavoriteRestaurantPresenter';
import getFavoriteContainer from '../src/scripts/views/pages/favorite/FavoriteRestaurantView';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderContainer = () => {
    view = new getFavoriteContainer();
    document.body.innerHTML = view.getFavoriteContainer();
  };

  beforeEach(() => {
    renderContainer();
  });

  describe('When no restaurants have been liked', () => {
    it('should render the information that no restaurants have been liked', () => {
      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoritePresenter({
        view,
        favoriteRestaurant: favoriteRestaurants,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.restaurant-item-not-found').length).toEqual(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      new FavoritePresenter({
        view,
        favoriteRestaurant: favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      const favoriteRestaurants = {
        getAllRestaurants: jest.fn().mockImplementation(() => [
          {
            id: 11,
            name: 'Restaurant A',
          },
          {
            id: 22,
            name: 'Restaurant B',
          },
          {
            id: 33,
            name: 'Restaurant C',
          },
        ]),
      };

      new FavoritePresenter({
        view,
        favoriteRestaurant: favoriteRestaurants,
      });

      const favorite = document.getElementById('favorites');
      favorite.addEventListener('favorites:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(3);
        done();
      });
    });
  });
});