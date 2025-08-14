import { Routes } from '@angular/router';
import { EventsPage } from './events-page/events-page';
import { Home } from './home/home';
import { ShopPage } from './shop-page/shop-page';
import { PulsoXSatmoriPage } from './pulso-x-satmori-page/pulso-x-satmori-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'events', component: EventsPage },
  { path: 'shop', component: ShopPage },
  { path: 'pulso-x-satmori', component: PulsoXSatmoriPage }

];
