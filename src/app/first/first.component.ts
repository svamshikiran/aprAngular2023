import { Component, OnInit } from '@angular/core';

import { Student } from '../model/student.model';
import { StudentService } from '../svc/student.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents()
    .subscribe((data: Student[]) => {
      this.students = data;
    });
  }
}
