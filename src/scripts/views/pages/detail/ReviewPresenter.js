import RestaurantDbSource from '../../../data/restaurantDb';
import UrlParser from '../../../routes/url-parser';
import Reviewer from './detailRestaurantView';
import DateHelper from '../../../utils/date-helper';

const reviewer = new Reviewer;

const ReviewerPresenter = {
  async init({ review, reviewForm }) {
    this._review = review;
    this._reviewForm = reviewForm;

    await this._renderForm();
  },

  async _renderForm() {
    this._reviewForm.innerHTML = reviewer.createFormReviwerDetailRestaurant();
    this._isFormSubmitted();
  },

  _isFormSubmitted() {
    const reviewFormElement = document.querySelector('#form-reviewer');

    reviewFormElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const inputReviewer = document.querySelector('#reviewer');
      const inputReview = document.querySelector('#review');
      const data = {
        id: url.id,
        name: inputReviewer.value,
        review: inputReview.value,
      };

      this.request(data);
    });
  },

  async request(data) {
    const inputReviewer = document.querySelector('#reviewer');
    const inputReview = document.querySelector('#review');
    const responseJSON = await RestaurantDbSource.reviewRestaurant(data);
    const date = new Date();
    const { id } = data;
    const { name } = data;
    const { review } = data;
    if ((await responseJSON.error) === false) {
      this._review.innerHTML += reviewer.getReviewDetailRestaurant({
        id,
        name,
        review,
        date: `
        ${DateHelper.formatLongDateId(date)}
         `,
      });
      inputReviewer.value = '';
      inputReview.value = '';

      alert('Review successfully added!');
    } else {
      alert('Failed to add a review', await responseJSON.message);
    }
  },
};

export default ReviewerPresenter;