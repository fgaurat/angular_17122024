import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todos } from '../../models/todo';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,MatTableModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todoService:TodoService = inject(TodoService)
  todos$?:Observable<Todos>


  ngOnInit(): void {
    this.todos$ = this.todoService.getAll()
  }





}
