import { describe, beforeEach, it, expect, afterEach } from '@jest/globals';
import FavoriteIdb from '../src/scripts/data/favorite-idb';
import * as TestFact from './helpers/testFact';

// eslint-disable-next-line no-undef
global.structuredClone = (json) => JSON.parse(JSON.stringify(json));

describe('Unliking A Restaurant', () => {
  const addLikeBtn = () => {
    document.body.innerHTML = '<div id="like-button-container"></div>';
  };

  beforeEach(async () => {
    addLikeBtn();
    await FavoriteIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFact.createLikeBtn({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFact.createLikeBtn({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFact.createLikeBtn({ id: 1 });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFact.createLikeBtn({ id: 1 });
    // Hapus dulu dari daftar yang disukai
    await FavoriteIdb.deleteRestaurant(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurants()).toEqual([]);
  });
});
