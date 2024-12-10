/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/liked');
});

Scenario('post a restaurant review', async ({ I }) => {
  const reviewValue = 'Mantap.....';
  I.amOnPage('/');
  I.waitForElement('.restaurant-item', 10);
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item').last());
  I.waitForElement('#form-reviewer', 10);
  I.seeElement('#form-reviewer');
  I.fillField('#reviewer', 'Reviewer');
  I.fillField('#review', reviewValue);
  I.click('#submit');
  I.waitForElement('.restaurant-review', 20);

  const lastReview = locate('.restaurant-review-second-row p').last();
  const lastReviewValue = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewValue.trim(), lastReviewValue.trim());
});
