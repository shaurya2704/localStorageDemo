import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


const allTasks = 'allTasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  public localGroup: FormGroup;
  public taskName: FormControl;
  public isCompleted: FormControl;
  public tasks: Array<{}>;



  constructor(private formBuilder: FormBuilder) {
    this.localGroup = new FormGroup({
      taskName: new FormControl(''),
      isCompleted: new FormControl(false)
    });
    this.onChanges();

  }

  ngOnInit() {
    if (localStorage.getItem(allTasks)) {
      this.tasks = JSON.parse(localStorage.getItem(allTasks));
      console.log(this.tasks);
    } else {
      this.tasks = [];
    }
  }

  onModelChange = (model) => { };
  onModelTouched = (model) => { };



  registerOnChange(fn: (model) => {}): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: (model) => {}): void {
    this.onModelTouched = fn;
  }

  onChanges(): void {
    this.localGroup.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  public addTask() {
    this.tasks.push(this.localGroup.value);
    this.localGroup.reset({
      taskName: '',
      isCompleted: false
    });

    localStorage.setItem(allTasks, JSON.stringify(this.tasks));
  }

  public updateVal(i, event) {
    if (event) {
      this.tasks[i]['isCompleted'] = event;
    }
    else {
      this.tasks[i]['isCompleted'] = event;
    }
    localStorage.setItem(allTasks, JSON.stringify(this.tasks))
  }

  deleteLocalStorage() {
    localStorage.removeItem(allTasks);
    window.location.reload();
  }
}






