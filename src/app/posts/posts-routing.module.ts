import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const postsRouting: Routes = [
  { path: 'posts',  component: PostsComponent,
    children: [
      { path: '', component: PostsListComponent },
      { path: 'add', component: PostEditComponent },
      { path: ':id', component: PostComponent },
      { path: ':id/edit', component: PostEditComponent }
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(postsRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }
