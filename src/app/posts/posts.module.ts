import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ],
  exports: [
    PostsComponent,
    PostsComponent
  ]
})
export class PostsModule { }
