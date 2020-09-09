import { StudentsModel } from './../model/students.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataarray: StudentsModel[] = [];
  home = new StudentsModel();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.home = new StudentsModel();
    this.addPerson();
    this.dataarray.push(this.home);
  }
  addPerson() {
    this.apiService.addStudents(this.home)
      .subscribe(data => {
        console.log(data);
      })
  }

  addForm() {
    this.home = new StudentsModel();
    this.dataarray.push(this.home);
  }

  removeForm(index) {
    this.dataarray.splice(index);
  }

  onsubmit() {
    console.log(this.dataarray);
  }

}
