import { Component, computed, inject, signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Post } from '../post';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-list',
  imports: [PostFormComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {

  readonly http = inject(HttpClient)
  
  // en angular 20, on convertit en signal :
  postsGet = toSignal(
  this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'),
  { initialValue: null }
  ) 

  // readonly posts = httpResource<PostDto[]>(() => (
  //   {url: 'https://jsonplaceholder.typicode.com/posts'})
  // )

  postsNew = signal<Post[]>([])

  posts = computed(() => {
    const existingPosts = this.postsGet() || [];
    return [...existingPosts, ...this.postsNew()];
  })

  addPost(post: Post) {
    this.http.post<Post>('https://jsonplaceholder.typicode.com/posts',
    post)
      .subscribe(newPost => {
        this.postsNew.update(arr => [...arr, newPost])
    })
  } 
}