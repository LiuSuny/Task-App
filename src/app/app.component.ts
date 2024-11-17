import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS
  title = 'Task-App';
  selectedId?: string;

  get selectedUser(){
    return this.users.find((user => user.id ===this.selectedId))!;
  }

  onSelectedUser(id: string){
    this.selectedId = id
  }
}
