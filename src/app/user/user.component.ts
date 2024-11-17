import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser=DUMMY_USERS[randomIndex];

  //@Input({required :true})  id!: string;
  //@Input({required :true})  avatar!: string;
  //@Input({required :true}) name!: string;
  @Input({required :true})  user!: {
        id: string,
        avatar: string,
        name: string
  } 
  @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagPath = computed(() =>{
    
  //     return '/Task-App/src/assets/users/' + this.selectedUser.avatar
  // })

  get imagPath(){
    return 'users/' + this.user.avatar
  }


   onSelectUser(){
     this.select.emit(this.user.id)
   }
}
