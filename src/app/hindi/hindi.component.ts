import { Component, OnInit } from '@angular/core';
import { Subject } from '../shared/subject';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SubjectService } from '../services/subject.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.scss']
})
export class HindiComponent implements OnInit {

  langselected:Subject[];

  constructor(private subser:SubjectService, private location: Location, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.pipe(switchMap((params:Params)=>this.subser.getSubject(params['ver'])))
    .subscribe((Subject)=>this.langselected=Subject);

  }

  goBack(){
    this.location.back();
  }

}
