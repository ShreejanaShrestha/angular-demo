import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './layouts/project/project.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './layouts/login/login.component';
import {UsersComponent} from './layouts/users/users.component';
import {UserProfileComponent} from './layouts/user-profile/user-profile.component';
import {AuthGuardGuard as AuthGuard } from './core/guards/auth-guard.guard';
import { AddUserComponent } from './layouts/users/add-user/add-user.component';
import { UpdateUserComponent } from './layouts/users/update-user/update-user.component';
import {PostComponent} from './layouts/post/post.component';
import {DragAndDropComponent} from './layouts/drag-and-drop/drag-and-drop.component';
import {UserPostComponent} from './layouts/users/user-post/user-post.component';

const routes: Routes = [
  { path: '', component: UsersComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'user', component: UsersComponent, canActivate: [AuthGuard],
      children: [
        { path: ':id', component: UserProfileComponent, canActivate: [AuthGuard] },

      ]
  },
  { path: 'user/:id/post', component: UserPostComponent, canActivate: [AuthGuard] },

  // { path: 'user/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'user_info_add', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'user_info_update/:id', component: UpdateUserComponent, canActivate: [AuthGuard] },
  { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'drag', component: DragAndDropComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
