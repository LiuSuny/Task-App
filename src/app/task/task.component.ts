import { Component, inject, Input } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { AddNewTaskComponent } from "./add-new-task/add-new-task.component";
import { newTaskData } from './new-task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NewTaskComponent, AddNewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  private taskService = inject(TasksService);
  isAddingTask = false;


  get selectedUserTask()
  {
      return this.taskService.getUserTask(this.userId);
  }

  

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

 
}
