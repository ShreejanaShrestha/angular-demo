import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginFormComponent } from './layouts/login/user-login-form/user-login-form.component';
import { ProjectComponent } from './layouts/project/project.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './layouts/login/login.component';
import {UsersComponent} from './layouts/users/users.component';
import {UserProfileComponent} from './layouts/user-profile/user-profile.component';
import {AuthGuardGuard as AuthGuard } from './core/guards/auth-guard.guard';
import { AddUserComponent } from './layouts/users/add-user/add-user.component';
import { UpdateUserComponent } from './layouts/users/update-user/update-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'user', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'user_info_add', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'user_info_update/:id', component: UpdateUserComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
