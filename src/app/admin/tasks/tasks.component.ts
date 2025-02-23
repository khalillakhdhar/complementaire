import { Component } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';
import { Task } from '../../shared/models/task';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  task={} as Task;
  tasks:Task[]=[];
  grade=""
  constructor(private taskService:TaskService,private userService:UserService)
  {
    this.tasks=this.taskService.getTasks();
    let current=this.userService.getOneUser(Number(localStorage.getItem('currentUser')));
    this.grade=current.role;

  }
  addTask()
  {
    this.taskService.addTask(this.task);
    this.tasks=this.taskService.getTasks();
    this.task={} as Task;
  }
  deleteTask(index:number)
  {
    if(confirm("vous voulez supprimer cette tache? "))
    this.taskService.deleteTask(index);
    this.tasks=this.taskService.getTasks();
  }


}
