import CONFIG from '../../../globals/config';

class DetailRestaurantView {
  getDetailRestaurantContainer = () => {
    return `
      <loading-component></loading-component>
      <div class="label text-shadow " id="label">Restaurant Detail</div>
      <section id="restaurant-detail" class="restaurant-detail content gold" tabindex="0"></section>  
      
      <div id="customer-review-form-container"></div>
      <div id="like-button-container"></div>  
    `;
  };

  getDetailRestaurant = (restaurant) => {
    return `
    <div class="box-img h-500">
      <img class="pic lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image ${restaurant.name}">  
      <div class="bottom ">
        <div class="restaurant-name"><i class="fa-solid fa-store"></i> ${restaurant.name}</div>
        <div class="restaurant-address"><i class="fa-solid fa-compass"></i> Address in ${restaurant.address}, ${restaurant.city}</div>
        <div class="restaurant-rate"><i class="fa-solid fa-star"></i> Rating ${restaurant.rating}</div>
      </div>
    </div>
    <div class="wrapper">
      <h2 class="text-shadow label">Description</h2>
      <p class="box-content-description restaurant-description justify">${restaurant.description}</p>
      <div class="categories">
        <h2 class="text-shadow label">Categories</h2>
        <div>
          ${restaurant.categories.map((categori) => `
          <div class="name">${categori.name}</div>
          `).join('')}
        </div>
      </div>
      <h2 class="detail-restaurant-menu-title text-shadow label">Menu</h2>
      <div class="menu-foods-drinks">
        <div class="detail-restaurant-menu-foods">
          <h3 class="text-shadow label">Foods</h3>
          ${restaurant.menus.foods.map((food) => `
          <p class="box-content-description menu-foods"><i class="fa-solid fa-utensils"></i> ${food.name}</p>
          `).join('')}
        </div>
        <div class="detail-restaurant-menu-drinks">
          <h3 class="text-shadow label">Drinks</h3>
          ${restaurant.menus.drinks.map((drink) => `
          <p class="box-content-description menu-drinks"><i class="fa-solid fa-martini-glass-citrus"></i> ${drink.name}</p>
          `).join('')}
        </div>
      </div>    
      <div class="restaurant-review wrapper">
        <h2 class="restaurant-customers-review text-shadow label">Customers Review</h2>
        ${restaurant.customerReviews.map((review) => this.getReviewDetailRestaurant(review)).join('')}
      </div> 
    </div>  
    `;
  };

  getReviewDetailRestaurant = (review) => {
    return `
      <div class="restaurant-review-content">
        <div class="restaurant-review-fist-row">
          <p class="restaurant-review-fist-row-name"><i class="fa-solid fa-user"></i> ${review.name}</p>
          <p class="restaurant-review-fist-row-date"><i class="fa-solid fa-calendar-days"></i> ${review.date}</p>
        </div>
        <div div class="restaurant-review-second-row">
          <p><i class="fa-solid fa-comment"></i> ${review.review}</p>
        </div>
      </div>
    `;
  };

  createFormReviwerDetailRestaurant = () => {
    return `
    <div class="restaurant-detail gold">
      <div class="wrapper content ">  
        <h2 class="text-shadow label">Submit Your Review</h2>
        <form class="form-reviewer" id="form-reviewer">
          <label for="reviewer">Name :</label>
          <input type="text" name="reviewer" id="reviewer" class="reviewer">
          <label for="review">Review :</label>
          <input type="text" name="review" id="review" class="review">
          <button type="submit" id="submit" class="submit">Submit</button>
        </form>
      </div>
    </div>
    `;
  };

  createLikeButton = () => {
    return `
    <button aria-label="like this restaurant" id="like-button" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;
  };

  createUnlikeButton = () => {
    return `
    <button aria-label="unlike this restaurant" id="like-button" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;
  };

  showDetailRestaurant(restaurants) {
    const detailRestaurant = document.querySelector('#restaurant-detail');
    detailRestaurant.innerHTML = this.getDetailRestaurant(restaurants);
    detailRestaurant.dispatchEvent(new Event('restaurant-detail:updated'));
  }
}

export default DetailRestaurantView;