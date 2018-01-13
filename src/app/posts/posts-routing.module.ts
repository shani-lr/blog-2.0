import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';

const postsRouting: Routes = [
  { path: 'posts',  component: PostsComponent }
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
