import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { LogViewerComponent } from './logging/log-viewer/log-viewer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent, CounterComponentComponent, LogViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'awi-app';
}
