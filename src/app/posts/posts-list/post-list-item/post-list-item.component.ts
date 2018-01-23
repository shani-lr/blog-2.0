import { Component, Input} from '@angular/core';

import { Post } from '../../post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css'],
})
export class PostListItemComponent {
  @Input() post: Post;
  @Input() index: number;
}
