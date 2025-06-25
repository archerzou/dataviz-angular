import { Routes } from '@angular/router';
import {LandingComponent} from './features/landing/landing.component';
import {Dashboard} from './features/dashboard/dashboard';
import {AuthGuard} from './shared/services/auth.guard.service';
import { Datasource } from './features/datasources/datasource';
import {Chart} from './features/charts/chart';
import { ChartCreation } from './features/charts/components/chart-creation/chart-creation';

export const routes: Routes = [
  { path: '', title: 'App', component: LandingComponent },
  { path: 'dashboard', title: 'DataViz - Dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'datasources', title: 'DataViz - Datasources', component: Datasource, canActivate: [AuthGuard] },
  { path: 'charts', title: 'DataViz - Charts', component: Chart, canActivate: [AuthGuard] },
  { path: 'charts/create', title: 'DataViz - Create New Chart', component: ChartCreation, canActivate: [AuthGuard] },
  { path: 'charts/edit/:chartId', title: 'DataViz - Edit Chart', component: ChartCreation, canActivate: [AuthGuard] }
];
