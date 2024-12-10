
import { describe, beforeEach, it, expect } from '@jest/globals';
import { spyOn } from 'jest-mock';
import FavoriteIdb from '../src/scripts/data/favorite-idb';
import * as TestFact from './helpers/testFact';

// eslint-disable-next-line no-undef
global.structuredClone = (json) => JSON.parse(JSON.stringify(json));

describe('Liking A Restaurant', () => {
  const addLikeBtn = () => {
    document.body.innerHTML = '<div id="like-button-container"></div>';
  };

  beforeEach(() => {
    addLikeBtn();
    spyOn(FavoriteIdb, 'searchRestaurants');
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFact.createLikeBtn({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFact.createLikeBtn({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFact.createLikeBtn({ id: 1 });
    document.querySelector('#like-button').dispatchEvent(new Event('click'));
    // Memastikan restaurant berhasil disukai
    const restaurant = await FavoriteIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await FavoriteIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFact.createLikeBtn({ id: 1 });
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#like-button').dispatchEvent(new Event('click'));
    // Tidak ada yang ganda
    expect(await FavoriteIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    await FavoriteIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFact.createLikeBtn({});
    document.querySelector('#like-button').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurants()).toEqual([]);
  });
});
