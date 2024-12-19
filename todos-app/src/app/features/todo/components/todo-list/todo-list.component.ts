import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todos } from '../../models/todo';
import { EMPTY, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,MatTableModule,MatCheckboxModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todoService:TodoService = inject(TodoService)
  // todos$:Observable<Todos> = EMPTY
  todos$!:Observable<Todos>
  displayedColumns: string[] = ['id','title','completed','chkCompleted'];

  ngOnInit(): void {
    this.todos$ = this.todoService.getAll()
  }

}
