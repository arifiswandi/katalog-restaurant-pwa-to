import CONFIG from '../../../globals/config';

class HomeView {
  getHomeContainer = () => {
    return `     
      <loading-component></loading-component>
      <hero-component></hero-component>    
      <div class="label text-shadow " id="label">Explore Restaurant</div>
      <section id="restaurant-list" class="restaurant-list content" tabindex="0"></section>
    `;
  };

  getRestaurant = (restaurant) => {
    return `
      <a class="restaurant-item non-decoration box gold" href="#/detail/${restaurant.id}">
        <div class="box-img h-225">
          <img class="pic lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image ${restaurant.name}">
          <div class="top-left">${restaurant.city}</div>
          <div class="top-right"><i class="fa-solid fa-star"></i> ${restaurant.rating}</div>
        </div>
        <div class="wrapper">
          <h2 class="restaurant-name box-content-name text-shadow "><i class="fa-solid fa-store"></i> ${restaurant.name}</h2>
          <p class="box-content-description">${restaurant.description || '-'}...</p>
        </div>
      </a>
    `;
  };

  getEmptyHomeRestaurant = () => {
    return `
      <div aria-label="Not Found Restaurant" class="restaurant-item-not-found label text-shadow">
        Not Found Restaurant:)
      </div> 
    `;
  };

  showRestaurant = (restaurants) => {
    let resultHomeRestaurant;
    if (restaurants.length) {
      resultHomeRestaurant = restaurants.reduce((carry, restaurant) => carry.concat(this.getRestaurant(restaurant)), '');
    } else {
      resultHomeRestaurant = this.getEmptyHomeRestaurant();
    }

    const home = document.querySelector('#restaurant-list');
    home.innerHTML = resultHomeRestaurant;
    home.dispatchEvent(new Event('home:updated'));
  };
}

export default HomeView;