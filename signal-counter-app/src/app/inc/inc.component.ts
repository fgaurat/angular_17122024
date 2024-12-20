import { Component, inject } from '@angular/core';
import { CountSignalService } from '../count-signal.service';

@Component({
  selector: 'app-inc',
  imports: [],
  templateUrl: './inc.component.html',
  styleUrl: './inc.component.css',
})
export class IncComponent {
  countSignalService = inject(CountSignalService);

  inc() {
    this.countSignalService.inc();
  }
}
