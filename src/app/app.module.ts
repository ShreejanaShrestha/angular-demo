import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ProjectComponent } from './layouts/project/project.component';
import { LoginComponent } from './layouts/login/login.component';
import { UserLoginFormComponent } from './layouts/login/user-login-form/user-login-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './layouts/users/users.component';
import { UserProfileComponent } from './layouts/user-profile/user-profile.component';
import {MainInterceptor} from './core/interceptors/http-interceptor/main.interceptor';
import { AddUserComponent } from './layouts/users/add-user/add-user.component';
import { UpdateUserComponent } from './layouts/users/update-user/update-user.component';
import { PostComponent } from './layouts/post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    LoginComponent,
    UserLoginFormComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    HeaderComponent,
    UsersComponent,
    UserProfileComponent,
    AddUserComponent,
    UpdateUserComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
