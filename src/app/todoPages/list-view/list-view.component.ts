import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
// import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  list!:List;
  constructor(private taskService: TaskService , private router: Router) { }

  ngOnInit(): void {
  }

  createList(title: string)
  {
    this.taskService.createList(title).subscribe((list:any) => {
      console.log(list);
      this.router.navigate(['/lists','list._id'])
    });

  }

}
