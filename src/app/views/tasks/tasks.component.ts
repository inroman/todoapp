import { DataZadService } from './../../service/data-zad.service';
import { Task } from './../../model/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  constructor(private dataZad: DataZadService) { }

  ngOnInit(): void {
    this.tasks = this.dataZad.getTasks();
  }

}
