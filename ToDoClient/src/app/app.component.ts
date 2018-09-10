import {MediaMatcher} from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { TaskList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  TaskLists: Array<TaskList>;
  isContentCollapsed: boolean = true;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.TaskLists = [{
      Id: 1,
      Category: "Cat1",
      Tasks: [{
        TaskId: 1,
        Description: "Task1",
        IsCompleted: true
      },
      {
        TaskId: 2,
        Description: "Task2",
        IsCompleted: false
      }
      ]
    },
    {
      Id: 2,
      Category: "Cat2",
      Tasks: [{
        TaskId: 1,
        Description: "Task1",
        IsCompleted: false
      },
      {
        TaskId: 2,
        Description: "Task2",
        IsCompleted: false
      }
      ]
    }
    ];
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
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
