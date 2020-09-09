import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ProjectComponent } from './layouts/project/project.component';
import { LoginComponent } from './layouts/login/login.component';
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
import { DragAndDropComponent } from './layouts/drag-and-drop/drag-and-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { UserPostComponent } from './layouts/users/user-post/user-post.component';
import { SharePostComponent } from './layouts/share-post/share-post.component';
import {NamePipe} from './core/pipe/name.pipe';
import {CapitalizePipePipe} from './core/pipe/capitalize-pipe.pipe';
import {LoaderInterceptor} from './core/interceptors/http-interceptor/loader.interceptor';
import {SpinnerService} from './shared/services/spinner.service';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    LoginComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    HeaderComponent,
    UsersComponent,
    UserProfileComponent,
    AddUserComponent,
    UpdateUserComponent,
    PostComponent,
    DragAndDropComponent,
    UserPostComponent,
    SharePostComponent,
    NamePipe,
    CapitalizePipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    DragDropModule,
  ],
  providers: [
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
