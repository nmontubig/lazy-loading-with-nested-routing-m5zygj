import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './shared/components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      trackPageView: true,
      trackEventName: 'Home',
    },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
