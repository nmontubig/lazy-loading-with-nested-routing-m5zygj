import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';
import { DescriptionComponent } from './description/description.component';
import {CommentsModule} from './../comments/comments.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    CommentsModule
  ],
  declarations: [AboutComponent, DescriptionComponent],
})
export class AboutModule { }