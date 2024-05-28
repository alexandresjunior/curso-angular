import { Injectable } from '@angular/core';
import { TASKS } from '../mocks/tasks';
import { Task } from '../interfaces/Task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
