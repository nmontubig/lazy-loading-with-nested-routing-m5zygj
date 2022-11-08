import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

//components
import { AboutComponent } from './about.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      trackPageView: true,
      trackEventName: 'About',
    },
    children: [
      {
        path: 'description',
        component: DescriptionComponent,
        data: {
          trackPageView: true,
          trackEventName: 'Description',
        },
        children: [
          {
            path: 'comments',
            loadChildren: './../comments/comments.module#CommentsModule',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
