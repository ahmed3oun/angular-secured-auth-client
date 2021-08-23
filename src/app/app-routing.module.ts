import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginGuard } from './_guards/login.guard';
import { LogoutGuard } from './_guards/logout.guard';
import { AdminGuard } from './_guards/admin.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent , canActivate:[LogoutGuard] },
  { path: 'register', component: RegisterComponent , canActivate:[LogoutGuard]},
  { path :'forgotPassword' , component : ForgotPasswordComponent , canActivate:[LogoutGuard]},
  { path :'resetPassword' , component : ResetPasswordComponent , canActivate:[LogoutGuard]},
  { path: 'profile', component: ProfileComponent , canActivate:[LoginGuard]},
  { path: 'user', component: BoardUserComponent , canActivate:[LoginGuard]},
  { path: 'admin', component: BoardAdminComponent , canActivate:[LoginGuard,AdminGuard]},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
