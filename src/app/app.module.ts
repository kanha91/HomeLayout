import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoViewComponent } from './todoPages/todo-view/todo-view.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListViewComponent } from './todoPages/list-view/list-view.component';
import { NewTaskComponent } from './todoPages/new-task/new-task.component';
import { LoginPageComponent } from './todoPages/login-page/login-page.component';
import { WebRequestInterceptorService } from './web-request-interceptor.service';
import { SignUpPageComponent } from './todoPages/sign-up-page/sign-up-page.component';
import { EditListComponent } from './todoPages/edit-list/edit-list.component';
import { EditTaskComponent } from './todoPages/edit-task/edit-task.component';
import { TaskAssignedComponent } from './todoPages/task-assigned/task-assigned.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoViewComponent,
    ListViewComponent,
    NewTaskComponent,
    LoginPageComponent,
    SignUpPageComponent,
    EditListComponent,
    EditTaskComponent,
    TaskAssignedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass : WebRequestInterceptorService , multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
