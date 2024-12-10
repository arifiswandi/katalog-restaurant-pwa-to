/* eslint-disable no-undef */

global.structuredClone = (json) => JSON.parse(JSON.stringify(json));

const itActsAsPreferredRestaurantModel = (preferredRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    preferredRestaurant.putRestaurant({ id: 1 });
    preferredRestaurant.putRestaurant({ id: 2 });

    expect(await preferredRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await preferredRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await preferredRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    preferredRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await preferredRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    preferredRestaurant.putRestaurant({ id: 1 });
    preferredRestaurant.putRestaurant({ id: 2 });

    expect(await preferredRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    preferredRestaurant.putRestaurant({ id: 1 });
    preferredRestaurant.putRestaurant({ id: 2 });
    preferredRestaurant.putRestaurant({ id: 3 });

    await preferredRestaurant.deleteRestaurant(1);

    expect(await preferredRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    preferredRestaurant.putRestaurant({ id: 1 });
    preferredRestaurant.putRestaurant({ id: 2 });
    preferredRestaurant.putRestaurant({ id: 3 });

    await preferredRestaurant.deleteRestaurant(4);

    expect(await preferredRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should be able to search for restaurants', async () => {
    preferredRestaurant.putRestaurant({ id: 1, name: 'nama restaurant a' });
    preferredRestaurant.putRestaurant({ id: 2, name: 'nama restaurant b' });
    preferredRestaurant.putRestaurant({ id: 3, name: 'nama restaurant abc' });
    preferredRestaurant.putRestaurant({ id: 4, name: 'ini nama restaurant abcd' });

    expect(await preferredRestaurant.searchRestaurants('nama restaurant a')).toEqual([
      { id: 1, name: 'nama restaurant a' },
      { id: 3, name: 'nama restaurant abc' },
      { id: 4, name: 'ini nama restaurant abcd' },
    ]);
  });
};

export { itActsAsPreferredRestaurantModel };
