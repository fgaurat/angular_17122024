import { Component } from '@angular/core';
import { TodoListComponent } from "../../features/todo/components/todo-list/todo-list.component";

@Component({
  selector: 'app-todo-dashboard',
  imports: [TodoListComponent],
  templateUrl: './todo-dashboard.component.html',
  styleUrl: './todo-dashboard.component.css'
})
export class TodoDashboardComponent {

}
