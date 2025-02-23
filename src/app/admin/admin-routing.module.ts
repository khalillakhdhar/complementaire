import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'',redirectTo:'accueil',pathMatch:'full'},

  { path: '', component: AdminComponent,
children: [
  {
    path:"accueil",component:AccueilComponent
  },
  {
    path:"users",component:UsersComponent
  },
  {
    path:"tasks",component:TasksComponent
  }
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
