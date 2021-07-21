import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private webReqService: WebRequestService) { }



  getLists(){
    return this.webReqService.get('lists');
  }

  createList(title:string) {
    // send a web req to create a list
    return this.webReqService.post('lists', { title });
  }

  updateList(id:string , title : string) {
    // send a web req to update a list
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  updateTask(listId:string, taskId:string, title : string) {
    // send a web req to update a task
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteList(id:string){
    return this.webReqService.delete(`lists/${id}`);
  }

  deleteTask(listId:string , taskId:string){
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  getTasks(listId: string){
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title:string , listId:string)  {
    // send a web req to create a task
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  complete(tasks:Task){
    return this.webReqService.patch(`lists/${tasks._listId}/tasks/${tasks._id}`,{
      completed: !tasks.completed
    })
  }

}
