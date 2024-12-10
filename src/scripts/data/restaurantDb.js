import API_ENDPOINT from '../globals/api-endpoint.js';

class RestaurantDb {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    return response.json();
  }

  static async reviewRestaurant(data) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const responseText = await fetch(API_ENDPOINT.REVIEW, options);
      return responseText.json();
    } catch (error) {
      return {
        error: true,
        message: `${error.message}! Review not successfully added!\nPlease check your internet connection!`,
      };
    }
  }
}

export default RestaurantDb;
