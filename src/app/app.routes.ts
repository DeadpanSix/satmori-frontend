import { Routes } from '@angular/router';
import { EventsPage } from './events-page/events-page';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'events', component: EventsPage }
];
