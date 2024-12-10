import LikeBtnPresenter from '../../src/scripts/views/pages/detail/likePresenter';

const createLikeBtn = async (restaurant) => {
  await LikeBtnPresenter.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    restaurant,
  });
};

export { createLikeBtn };
