import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentCardComponent } from './student/student-card/student-card.component';
import { StudentListComponent } from './student/student-list/student-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'awi-app';
}
