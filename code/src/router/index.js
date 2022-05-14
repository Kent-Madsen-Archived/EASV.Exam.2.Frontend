import 
{ 
    createRouter, 
    createWebHistory 
} from 'vue-router';

import UserProfileRoutes 
  from './UserProfile.js';
  
import PublicRoutes 
  from './PublicRoutes.js';


var RouteArray = new Array();

function Append( Array )
{
  let idx = 0;

  for( idx; idx < Array.length; idx++ )
  {
    RouteArray.push( Array[ idx ] );
  }
}

Append( PublicRoutes );
Append( UserProfileRoutes );

RouteArray.sort( 
  (a, b) => 
  {
    return a.path > b.path;
  }
);


// Base requirements
const routes = RouteArray;

const router = createRouter
(
  {
    history: createWebHistory( process.env.BASE_URL ),
    routes
  }
)

export default router;
