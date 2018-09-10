import { Component, OnInit } from '@angular/core';
import { TaskList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  TaskLists: Array<TaskList>;
  isContentCollapsed: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    this.TaskLists = [{
      Category: "Cat1",
      Tasks: [{
        Description: "Task1",
        IsCompleted: false
      },
      {
        Description: "Task2",
        IsCompleted: false
      }
      ]
    },
    {
      Category: "Cat2",
      Tasks: [{
        Description: "Task1",
        IsCompleted: false
      },
      {
        Description: "Task2",
        IsCompleted: false
      }
      ]
    }
    ];
  }

  expandTasks(event) {
    this.isContentCollapsed = !this.isContentCollapsed;
  }

  allowDrop(event) {
    event.preventDefault();
  }
  drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
  drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
}
