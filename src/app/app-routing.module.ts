import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './todoPages/list-view/list-view.component';
import { LoginPageComponent } from './todoPages/login-page/login-page.component';
import { NewTaskComponent } from './todoPages/new-task/new-task.component';
import { SignUpPageComponent } from './todoPages/sign-up-page/sign-up-page.component';
import { TodoViewComponent } from './todoPages/todo-view/todo-view.component';

const routes: Routes = [
  { path: '', redirectTo:'lists', pathMatch:'full'},
  { path: 'list-view', component:ListViewComponent},
  { path: 'new-task', component:NewTaskComponent},
  { path: 'login', component:LoginPageComponent},
  { path: 'signup', component:SignUpPageComponent},
  { path: 'lists',component: TodoViewComponent },
  { path: 'lists/:listId',component: TodoViewComponent },
  { path: 'lists/:listId/new-task', component:NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
