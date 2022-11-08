import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments-routing.module' ;

@NgModule({
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  declarations: [CommentsComponent]
})
export class CommentsModule { }