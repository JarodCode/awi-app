import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  imports: [JsonPipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  readonly http = inject(HttpClient)
  posts = toSignal(
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'),
    { initialValue: null }
  )
}

