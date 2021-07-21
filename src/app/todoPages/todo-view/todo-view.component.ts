import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { empty } from 'rxjs';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {

  lists!:List[];
  tasks!:Task[];

  seleclectedListId : string | any

  constructor(private taskService: TaskService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
     if(params.listId){
        // console.log(params);
        this.seleclectedListId = params.listId;
        this.taskService.getTasks(params.listId).subscribe((tasks:any) => {
        this.tasks = tasks;
      })
     }else
     {
        this.tasks = this.tasks;

     }

    })

    this.taskService.getLists().subscribe((lists:any) => {
      // console.log(lists);
      this.lists = lists;

    });

  }

  onTaskClick(tasks: Task){

    this.taskService.complete(tasks).subscribe(()=> {

      console.log('Completed Successfully');
      tasks.completed = !tasks.completed;

    })

  }

  onDeleteListClick() {
    this.taskService.deleteList(this.seleclectedListId).subscribe((res : any) => {
      this.router.navigate(['/lists']);
      console.log(res);

    });
  }

  onDeleteTaskClick(id:string){

    this.taskService.deleteTask(this.seleclectedListId, id).subscribe((res : any) => {
      // this.router.navigate(['/lists']);
      this.tasks =  this.tasks.filter(val => val._id !== id);
      console.log(res);

    });

  }

}
