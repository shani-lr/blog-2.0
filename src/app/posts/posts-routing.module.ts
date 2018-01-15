import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const postsRouting: Routes = [
  { path: 'posts',  component: PostsComponent,
    children: [
      { path: '', component: PostsListComponent },
      { path: ':id', component: PostComponent }
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
