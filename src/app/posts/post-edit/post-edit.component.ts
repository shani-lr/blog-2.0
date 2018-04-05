import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take'

import { AppState } from '../../store/app.reducers';
import { Post } from '../post.model';
import { State } from '../store/post.reducers';
import * as PostActions from '../store/post.actions';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  id: number;
  editMode = false;
  postForm: FormGroup;
  post: Post = {
    title: '',
    content: '',
    image: '',
    author: '',
    timestamp: ''
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== undefined;
      if (this.editMode) {
        this.store.select('posts')
          .take(1)
          .subscribe((state: State) => {
            this.post = state.posts[this.id];
            this.initForm();
          });
      } else {
        this.initForm();
      }
    });
  }

  initForm(): void {
    this.postForm = new FormGroup({
      'title': new FormControl(this.post.title, Validators.required),
      'content': new FormControl(this.post.content, Validators.required),
      'image': new FormControl(this.post.image, Validators.required)
    });
  }

  onSubmit(): void {
    if (this.editMode) {
      this.store.dispatch(new PostActions.UpdatePost({id: this.id, post: this.postForm.value}));
    } else {
      this.store.dispatch(new PostActions.AddPost(this.postForm.value));
    }
    this.navigateBack();
  }

  onCancel(): void {
    this.navigateBack();
  }

  navigateBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
