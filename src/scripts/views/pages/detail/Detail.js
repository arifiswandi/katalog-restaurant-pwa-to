import RestaurantDb from '../../../data/restaurantDb';
import UrlParser from '../../../routes/url-parser'; '../../routes/url-parser';

import ReviewerPresenter from './ReviewPresenter';
import LikeBtn from './likePresenter';
import DetailRestaurant from './detailRestaurantView';

const view = new DetailRestaurant;

const Detail = {
  async render() {
    return view.getDetailRestaurantContainer();
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantDb.detailRestaurant(url.id);

    view.showDetailRestaurant(restaurant);

    LikeBtn.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      restaurant,
    });

    ReviewerPresenter.init({
      review: document.querySelector('.restaurant-review'),
      reviewForm: document.querySelector('#customer-review-form-container'),
    });

    const loaderContainer = document.querySelector('loading-component');
    loaderContainer.style.display = 'none';
  }
};

export default Detail;