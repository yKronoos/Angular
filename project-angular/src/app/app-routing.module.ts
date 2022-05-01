import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavUserComponent } from './components/templates/nav-user/nav-user.component';
import { LoginComponent } from './views/main/login/login.component';
import { RegisterComponent } from './views/main/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
