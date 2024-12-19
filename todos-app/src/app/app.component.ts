import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoDashboardComponent } from './pages/todo-dashboard/todo-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodoDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todos-app';
}
