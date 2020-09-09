import { StudentsModel } from './../model/students.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

    baseURL: string = "http://localhost:6000/";

    constructor(private http: HttpClient) {
    }
    addStudents(person: StudentsModel): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(person);
        console.log(body);
        return this.http.post(this.baseURL + 'students', body, { 'headers': headers });
    }

}
