import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
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
