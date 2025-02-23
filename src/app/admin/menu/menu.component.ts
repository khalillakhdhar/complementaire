import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  current:User={} as User;
  grade="";
  constructor(private userService:UserService)
  {
    this.current=this.userService.getOneUser(Number(localStorage.getItem('currentUser')));
    this.grade=this.current.role;
  }
disconnect()
{
  localStorage.removeItem("currentUser");
  window.location.href="../auth/login";
}
}
