import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './todoPages/edit-list/edit-list.component';
import { EditTaskComponent } from './todoPages/edit-task/edit-task.component';
import { ListViewComponent } from './todoPages/list-view/list-view.component';
import { LoginPageComponent } from './todoPages/login-page/login-page.component';
import { NewTaskComponent } from './todoPages/new-task/new-task.component';
import { SignUpPageComponent } from './todoPages/sign-up-page/sign-up-page.component';
import { TaskAssignedComponent } from './todoPages/task-assigned/task-assigned.component';
import { TodoViewComponent } from './todoPages/todo-view/todo-view.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'list-view', component:ListViewComponent},
  { path: 'new-task', component:NewTaskComponent},
  { path: 'edit-list/:listId', component:EditListComponent},
  { path: 'lists/:listId/edit-task/:taskId', component:EditTaskComponent},
  { path: 'login', component:LoginPageComponent},
  { path: 'signup', component:SignUpPageComponent},
  { path: 'lists',component: TodoViewComponent },
  { path: 'lists/:listId',component: TodoViewComponent },
  { path: 'lists/:listId/new-task', component:NewTaskComponent},
  { path: 'taskassigned', component:TaskAssignedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
