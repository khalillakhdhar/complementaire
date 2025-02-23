import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  user:User={} as User;
  constructor(private userService:UserService)
  {
    this.user=this.userService.getOneUser(Number(localStorage.getItem('currentUser')));
  }
  update()
  {
let id=Number(localStorage.getItem('currentUser'));
this.userService.updateUser(id,this.user);

  }
}
