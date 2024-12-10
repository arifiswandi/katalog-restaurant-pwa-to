/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/liked');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Not Found Favorite Restaurant', '.restaurant-item-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Not Found Favorite Restaurant:)', '.restaurant-item-not-found');
  I.amOnPage('/');
  I.waitForElement('a.restaurant-item', 10);
  I.seeElement('a.restaurant-item');
  const restaurantName = await I.grabTextFrom('.restaurant-name');
  I.click(locate('a.restaurant-item').first());
  I.seeElement('#like-button');
  I.click('#like-button');
  I.amOnPage('/#/liked');
  I.waitForElement('a.restaurant-item', 10);
  I.seeElement('a.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(restaurantName.trim(), likedRestaurantName.trim());
});

Scenario('query search in restaurant', async ({ I }) => {
  I.see('Not Found Favorite Restaurant:)', '.restaurant-item-not-found');
  I.amOnPage('/');
  I.waitForElement('.restaurant-item', 10);
  I.seeElement('.restaurant-item');
  const nameRestaurants = [];

  for (let i = 1; i <= 4; i++) {
    I.click(locate('.restaurant-item').at(i));
    I.waitForElement('#like-button', 10);
    I.click('#like-button');
    nameRestaurants.push(await I.grabTextFrom('.restaurant-name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/liked');
  I.seeElement('#query');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(nameRestaurants.length, visibleLikedRestaurants);

  const searchQuery = nameRestaurants[1].substring(1, 3);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const matchingRestaurants = nameRestaurants.filter((name) => name.indexOf(searchQuery) !== -1);
  const visibleSearchedLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleSearchedLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });

});