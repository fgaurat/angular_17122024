import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  imports: [MatFormFieldModule,FormsModule,MatCheckboxModule,MatInputModule,MatButtonModule,CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
    todoService:TodoService = inject(TodoService)

  todoFormModel:Todo={
    title:"",
    completed:false
  }

  submitTodo(){
    this.todoService.save(this.todoFormModel).subscribe()
  }


}
