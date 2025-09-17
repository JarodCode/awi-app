import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent, CounterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'awi-app';
}
