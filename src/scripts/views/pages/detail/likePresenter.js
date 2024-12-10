import FavoriteIdb from '../../../data/favorite-idb';
import LikeButtonView from './detailRestaurantView';

const likeView = new LikeButtonView;

const LikeBtn = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = likeView.createLikeButton();

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = likeView.createUnlikeButton();

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeBtn;