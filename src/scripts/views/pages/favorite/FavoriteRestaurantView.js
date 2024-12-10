import CONFIG from '../../../globals/config';

class FavoriteRestaurantView {
  getFavoriteContainer() {
    return `    
      <loading-component></loading-component>
      <div class="label text-shadow " id="label">Your Favorite Restaurant</div>
      <div class="search">
        <input class="query" id="query" type="text" placeholder="Search Favorite Restaurant...">
      </div>
      <section id="favorites" class="favorites restaurant-list content" tabindex="0"></section>  
    `;
  }

  getEmptyFavoriteRestorant() {
    return `
      <div aria-label="Not Found Favorite Restaurant" class="restaurant-item-not-found label text-shadow">
        Not Found Favorite Restaurant:)
      </div> 
    `;
  }

  createFavoriteRestaurant = (restaurant) => {
    return `
    <a class="restaurant-item non-decoration box gold" href = "#/detail/${restaurant.id}" >
      <div class="box-img h-225">
        <img class="pic lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image ${restaurant.name}">
        <div class="top-left">${restaurant.city}</div>
        <div class="top-right"><i class="fa-solid fa-star"></i> ${restaurant.rating}</div>
      </div>
      <div class="wrapper">
        <h2 class="restaurant-name box-content-name text-shadow "><i class="fa-solid fa-store"></i> ${restaurant.name}</h2>
        <p class="box-content-description">${restaurant.description || '-'}...</p>
      </div>
    </a >
    `;
  };

  runWhenSearching(callback) {
    document.querySelector('#query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurants) {
    let resultRestaurant;
    if (restaurants.length) {
      resultRestaurant = restaurants.reduce((carry, restaurant) => carry.concat(this.createFavoriteRestaurant(restaurant)), '');
    } else {
      resultRestaurant = this.getEmptyFavoriteRestorant();
    }
    const favorites = document.querySelector('#favorites');
    favorites.innerHTML = resultRestaurant;
    favorites.dispatchEvent(new Event('favorites:updated'));
  }
}

export default FavoriteRestaurantView;