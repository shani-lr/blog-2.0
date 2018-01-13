import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ],
  exports: [
    PostsComponent,
    PostComponent,
    PostsRoutingModule
  ]
})
export class PostsModule { }
