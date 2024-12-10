import Home from '../views/pages/home/Home';
import FavoriteRestaurant from '../views/pages/favorite/Favorite';
import Detail from '../views/pages/detail/Detail';

const routes = {
  '/': Home, // default page
  '/liked': FavoriteRestaurant,
  '/detail/:id': Detail,
};

export default routes;