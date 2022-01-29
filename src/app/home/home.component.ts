import { Component, Inject, OnInit } from '@angular/core';
import { Subject } from '../shared/subject';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subject:Subject[] | undefined;

  constructor(private subj:SubjectService) { }

  ngOnInit(): void {

    this.subj.getStudents().subscribe(data=>this.subject=data);
  }

}
