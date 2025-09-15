// import Demo from './demo'
import * as Layouts from 'layouts'
import Homepage from './home';
import Catalog1 from './catalog1';
import Catalog2 from './catalog2';
import Catalog3 from './catalog3';

const routes = [
  // {
  //   path: '/demo',
  //   Component: Demo,
  //   Super: Layouts.Home,
  //   auth: false
  // },
    {
    path: "/homepage",
    Component: Homepage,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/catalog1',
    Component: Catalog1,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/catalog2',
    Component: Catalog2,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/catalog3',
    Component: Catalog3,
    Super: Layouts.Home,
    auth: false
  }

]

export default routes
