import { Component, Input } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() name: string | undefined;

}
