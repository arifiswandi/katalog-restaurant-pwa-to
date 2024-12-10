/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/liked');
});

Scenario('showing empty unliked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Not Found Favorite Restaurant:)', '.restaurant-item-not-found');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Not Found Favorite Restaurant:)', '.restaurant-item-not-found');
  I.amOnPage('/');
  I.waitForElement('a.restaurant-item', 10);
  I.seeElement('a.restaurant-item');
  const restaurantName = await I.grabTextFrom('.restaurant-name');
  I.click(locate('a.restaurant-item').first());
  I.seeElement('#like-button');
  I.click('#like-button');
  I.amOnPage('/#/liked');
  I.seeElement('a.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(restaurantName.trim(), likedRestaurantName.trim());

  I.click(locate('a.restaurant-item').first());
  I.seeElement('#like-button');
  I.click('#like-button');
  I.amOnPage('/#/liked');
  I.see('Not Found Favorite Restaurant:)', '.restaurant-item-not-found');
});