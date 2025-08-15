import { Routes } from '@angular/router';
import { EventsPage } from './pages/events-page/events-page';
import { Home } from './pages/home-page/home-page';
import { ShopPage } from './pages/shop-page/shop-page';
import { PulsoXSatmoriPage } from './pages/pulso-x-satmori-page/pulso-x-satmori-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'events', component: EventsPage },
  { path: 'shop', component: ShopPage },
  { path: 'pulso-x-satmori', component: PulsoXSatmoriPage }

];
