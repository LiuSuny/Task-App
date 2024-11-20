import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../new-task/task.model';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent {
 
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
     this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
     });
  }
}
