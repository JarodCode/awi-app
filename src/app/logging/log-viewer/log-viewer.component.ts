import { Component, inject } from '@angular/core';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-log-viewer',
  imports: [],
  templateUrl: './log-viewer.component.html',
  styleUrl: './log-viewer.component.scss'
})
export class LogViewerComponent {

  readonly loggingService = inject(LoggingService)

}
