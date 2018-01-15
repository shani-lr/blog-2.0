import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostListItemComponent,
    PostsListComponent
  ]
})
export class PostsModule { }
