import { Injectable } from '@angular/core';
import { Subject } from '../shared/subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  constructor(private http:HttpClient) { }


  getStudents():Observable<Subject[]>
  {
    return this.http.get<Subject[]>(baseUrl);
  }

  getSubject(Version:string):Observable<Subject[]>
  {
    return this.http.get<Subject[]>(baseUrl + Version);
   
  }
  

  
 

}

