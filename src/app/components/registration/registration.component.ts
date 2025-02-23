import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-registration',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
user={} as User;
  constructor(private userService:UserService) {
this.user.role="user";

  }
register()
{

  console.log(this.user);
  this.userService.addUser(this.user);
  this.userService.getUsers();

}
}
