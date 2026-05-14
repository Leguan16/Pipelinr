import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Teams } from './pages/Teams';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Imprint } from './pages/Imprint';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/registration',
    Component: Registration,
  },
  {
    path: '/checkout',
    Component: Checkout,
  },
  {
    path: '/success',
    Component: Success,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
  {
    path: '/teams',
    Component: Teams,
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/imprint',
    Component: Imprint,
  },
  {
    path: '/privacy',
    Component: Privacy,
  },
  {
    path: '/terms',
    Component: Terms,
  },
]);
