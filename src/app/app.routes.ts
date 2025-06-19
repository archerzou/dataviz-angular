import { Routes } from '@angular/router';
import {LandingComponent} from './features/landing/landing.component';
import {Dashboard} from './features/dashboard/dashboard';
import {AuthGuard} from './shared/services/auth.guard.service';
import { Datasource } from './features/datasources/datasource';

export const routes: Routes = [
  { path: '', title: 'App', component: LandingComponent },
  { path: 'dashboard', title: 'DataViz - Dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'datasources', title: 'DataViz - Datasources', component: Datasource, canActivate: [AuthGuard] },
];
