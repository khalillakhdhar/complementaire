import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks:Task[]=[];

  constructor() {
    this.tasks=this.getTasks();
  }
  getTasks()
  {
    return JSON.parse(localStorage.getItem('tasks')||'[]');
  }
  addTask(task:Task)
  {
    this.tasks=this.getTasks();
    this.tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  deleteTask(index:number)
  {
    this.tasks=this.getTasks();
    this.tasks.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
