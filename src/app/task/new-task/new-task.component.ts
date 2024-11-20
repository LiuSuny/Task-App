import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
 @Input({required: true}) task!: Task;
 @Output() complete = new EventEmitter<string>();
 private taskService = inject(TasksService);

  

  onCompleteTask(){
   this.taskService.removeTask(this.task.id);

  }
}
