import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BlogsComponent,
    BlogComponent
  ],
  exports: [
    BlogsComponent,
    BlogsComponent
  ]
})
export class BlogsModule { }
