import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../model/student.model';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders(
	{
	  'Content-Type': 'application/json',
	  'Authorization': `Basic ` + btoa('user:user'),
	}
	)
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:9001/april2023';
  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]>{
	  return this.http.get<Student[]>(`${this.url}/student/all`, httpOptions);	
  }
  
  getStudentById(id:number): Observable<Student>{
	  return this.http.get<Student>(`${this.url}/student/get/${id}`, httpOptions);	
  }
}
