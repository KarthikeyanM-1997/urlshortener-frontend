import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateLinkComponent } from './create-link/create-link.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthServiceService } from './auth-service.service';


const routes: Routes = [
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "", component: LoginComponent
  },
  {
    path: "reset", component: ResetPasswordComponent
  },
  {
    path: "createLink", component: CreateLinkComponent, canActivate: [AuthServiceService]
  },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthServiceService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
