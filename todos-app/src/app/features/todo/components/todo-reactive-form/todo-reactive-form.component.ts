import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MessageQueueService } from '../../../../core/services/message-queue.service';
import { ActionsEnum } from '../../../../core/enums/actions.enum';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './todo-reactive-form.component.html',
  styleUrl: './todo-reactive-form.component.css'
})
export class TodoReactiveFormComponent {
  private formBuilder = inject(FormBuilder);
  private messageQueueService: MessageQueueService = inject(MessageQueueService);


  todoForm = this.formBuilder.group({
    title:['',Validators.required],
    completed:[false],
  })

  submitTodo(){
    this.messageQueueService.dispatch({
      type: ActionsEnum.NEW_TODO,
      payload:this.todoForm.value
    });
  }

}
