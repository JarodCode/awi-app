import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly http = inject(HttpClient)
  private readonly base = 'https://jsonplaceholder.typicode.com/posts'
  readonly postsResource = httpResource<Post[]>(() => this.base)
  
  private readonly _posts = signal<Post[]>([])
  readonly posts = this._posts.asReadonly()

  readonly allPosts = computed(() => {
    const serverPosts = this.postsResource.value() || [];
    return [...this._posts(), ...serverPosts];
  })

  add(dto: Post): void {
    this.http.post<Post>(this.base, dto).subscribe(newPost => {
      this._posts.update(list => [newPost, ...list])
    })
  }
}
