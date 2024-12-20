import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from '../models/action';
@Injectable({
  providedIn: 'root'
})
export class MessageQueueService {

  private bus:Subject<Action> = new Subject<Action>()

  constructor() { }
}
