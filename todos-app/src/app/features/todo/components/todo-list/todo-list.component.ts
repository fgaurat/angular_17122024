import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,MatTableModule,MatCheckboxModule,FormsModule,MatButtonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todoService:TodoService = inject(TodoService)
  // todos$:Observable<Todos> = EMPTY
  todos$!:Observable<Todos>
  displayedColumns: string[] = ['id','title','completed','chkCompleted','actions'];

  ngOnInit(): void {
    this.todos$ = this.todoService.getAll()
  }

  delete(todo:Todo){
    // supprime la todo localement
    // reload les datas du serveur <=

    // C'est moche !
    // this.todoService.delete(todo).subscribe(()=>{
    //   this.todos$ = this.todoService.getAll()
    // })

    // C'est moins moche !
    this.todos$ =this.todoService.delete(todo).pipe(
      switchMap((data) => this.todoService.getAll())
    )

  }

}
