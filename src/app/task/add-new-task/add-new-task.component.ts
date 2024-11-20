import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../new-task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent {
 
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  
  private taskService = inject(TasksService);
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onCancel(){
    this.close.emit();
  }

  onSubmit(){
     this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
     }, this.userId);
     this.onCancel();
  }
}
