import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from "../components/registration/registration.component";


@NgModule({
  declarations: [
    AdminComponent,
    AccueilComponent,
    UsersComponent,
    TasksComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RegistrationComponent
]
})
export class AdminModule { }
