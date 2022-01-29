import { Injectable } from '@angular/core';
import { Subject } from '../shared/subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/baseurl';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private url:string="/assets/data/subjects.json/";

  constructor(private http:HttpClient) { }


  getStudents():Observable<Subject[]>
  {
    return this.http.get<Subject[]>(this.url);
  }

  getSubject(Version:string):Observable<Subject[]>
  {
    return this.http.get<Subject[]>(this.url + Version);
  }

}

