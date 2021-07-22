import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService , private route:ActivatedRoute , private router: Router) { }

  listId!:string;
  newTask!:Task[];
  selectedListId!:string

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.listId = params['listId'];
      // console.log(this.listId);


    })
  }

  createTask(title: string){
    this.taskService.createTask(title,this.listId).subscribe((newTask:any) => {
      // console.log(newTask);
      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }
}
