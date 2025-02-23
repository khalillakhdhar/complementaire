import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:User[]=[];
  constructor(private userService:UserService)
    {
      this.users=this.userService.getUsers();

  }
  delete(id:number)
  {
    if(confirm("vous voulez supprimer cet utilisateur?"))
    {
      this.userService.deleteUser(id);
      this.users=this.userService.getUsers();
    }
  }

}
