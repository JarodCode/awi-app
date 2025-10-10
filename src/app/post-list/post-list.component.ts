import { Component, inject } from '@angular/core';
import { Post } from '../post';
import { PostFormComponent } from '../post-form/post-form.component';
import { PostsService } from '../posts.service'

@Component({
  selector: 'app-post-list',
  imports: [PostFormComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  readonly postsService = inject(PostsService)
  
  addPost(post: Post): void {
    this.postsService.add(post)
  }
}