import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, merge, Observable, switchMap } from 'rxjs';
import { filter} from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MessageQueueService } from '../../../../core/services/message-queue.service';
import { ActionsEnum } from '../../../../core/enums/actions.enum';
import { Action } from '../../../../core/models/action';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit,AfterViewInit {
  todoService: TodoService = inject(TodoService);
  messageQueueService: MessageQueueService = inject(MessageQueueService);

  // todos$:Observable<Todos> = EMPTY
  todos$!: Observable<Todos>;
  displayedColumns: string[] = [
    'id',
    'title',
    'completed',
    'chkCompleted',
    'actions',
  ];

  ngOnInit(): void {

    const delete$ = this.messageQueueService.bus$.pipe(
      filter((action:Action) => action.type===ActionsEnum.DELETE_TODO),
      switchMap((action:Action) => this.todoService.delete(action.payload))
    )
    const add$ = this.messageQueueService.bus$.pipe(
      filter((action:Action) => action.type===ActionsEnum.NEW_TODO),
      switchMap((action:Action) => this.todoService.save(action.payload))
    )
    const loadTodos$ = this.messageQueueService.bus$.pipe(
      filter((action:Action) => action.type===ActionsEnum.LOAD_TODOS),
    )

    this.todos$ = merge(delete$,add$,loadTodos$).pipe(
      switchMap(()=>this.todoService.getAll())
    )
  }

  ngAfterViewInit(){
    this.messageQueueService.dispatch({
      type: ActionsEnum.LOAD_TODOS,
    });
  }

  delete(todo: Todo) {
    // supprime la todo localement
    // reload les datas du serveur <=

    // C'est moche !
    // this.todoService.delete(todo).subscribe(()=>{
    //   this.todos$ = this.todoService.getAll()
    // })

    // C'est moins moche !
    // this.todos$ =this.todoService.delete(todo).pipe(
    //   switchMap((data) => this.todoService.getAll())
    // )

    // là ça va
    this.messageQueueService.dispatch({
      type: ActionsEnum.DELETE_TODO,
      payload:todo
    });
  }
}
