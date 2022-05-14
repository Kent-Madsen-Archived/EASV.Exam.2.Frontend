import 
{ 
    createRouter, 
    createWebHistory 
} from 'vue-router';

import UserProfileRoutes from './UserProfile.js';
import PublicRoutes from './PublicRoutes.js';

var RouteArray = new Array();

let idx = 0;

for( idx; idx < PublicRoutes.length; idx++ )
{
  RouteArray.push( PublicRoutes[ idx ] );
}

idx = 0;

for( idx; idx < UserProfileRoutes.length; idx++ )
{
  RouteArray.push( UserProfileRoutes[ idx ] );
}

RouteArray.sort((a, b) => {
  return a.path > b.path;
});

console.log(RouteArray);

const routes = RouteArray;

const router = createRouter(
  {
    history: createWebHistory( process.env.BASE_URL ),
    routes
  }
)

export default router;
