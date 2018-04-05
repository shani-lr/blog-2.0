import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostListItemComponent } from './posts-list/post-list-item/post-list-item.component';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostListItemComponent,
    PostsListComponent,
    PostEditComponent
  ]
})
export class PostsModule { }
