import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Version } from '../shared/subject';
import { SubjectService } from '../services/subject.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  @Output() public sidenavToggle = new EventEmitter();

  @Input() deviceXs:boolean;
  
  version=Version;

  activity= new FormControl('');
  subject= new FormControl('');
  subjects:string[]=['Chemistry', 'Biology']
  options:string[]=
  [
  'Body Joints - Elbow',
  'Body Joints - Ball-Socket Joint',
  'Chemical Change - Heating Sugar',
  'Acids-Bases - Conductivity'
  ];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private subser:SubjectService, @Inject ('BaseURL') public BaseURL) { }

  ngOnInit(): void {    

    this.filteredOptions=this.activity.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }


 

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public onToggleSidenav=()=>{
    this.sidenavToggle.emit();
  }

}



function consolelog(mqAlias: string) {
  throw new Error('Function not implemented.');

  
}


