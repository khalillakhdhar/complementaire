import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from "../components/registration/registration.component";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RegistrationComponent,

]
})
export class AuthModule { }
