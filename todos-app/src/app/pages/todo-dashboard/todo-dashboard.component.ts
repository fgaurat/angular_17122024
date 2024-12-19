import { Component } from '@angular/core';
import { TodoListComponent } from "../../features/todo/components/todo-list/todo-list.component";
import { TodoFormComponent } from "../../features/todo/components/todo-form/todo-form.component";

@Component({
  selector: 'app-todo-dashboard',
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './todo-dashboard.component.html',
  styleUrl: './todo-dashboard.component.css'
})
export class TodoDashboardComponent {

}
