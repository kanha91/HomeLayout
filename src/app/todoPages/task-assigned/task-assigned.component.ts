import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { User } from 'src/app/models/user.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-assigned',
  templateUrl: './task-assigned.component.html',
  styleUrls: ['./task-assigned.component.scss']
})
export class TaskAssignedComponent implements OnInit {



  users !: User[];
  list!:List;

  constructor(private taskService: TaskService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {


    this.taskService.getUsers().subscribe((users:any) => {
      console.log(users);
      this.users = users;

    })



  }

}
