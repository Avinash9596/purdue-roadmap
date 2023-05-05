import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import {EventsComponent} from './demo/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path:'',
        redirectTo:'auth/signin',
        pathMatch:'full',

      },
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path:'events',
       
        pathMatch:"full",
        component: EventsComponent
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      }
    ]
  },
  // {
  //   path:'events',
  //   component:EventsComponent,
  //   pathMatch:'full'


  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
