import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  
  readonly form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    
    body: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)]
    })
  });

  postAdded = output<Post>();

  submit(): void {
    if (this.form.valid) {
      const newPost: Post = {
        userId: 1,
        id: Date.now(),
        title: this.form.value.title!,
        body: this.form.value.body!
      };
      this.postAdded.emit(newPost);
      this.form.reset();
    }
  }
}