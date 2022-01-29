import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Version } from '../shared/subject';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

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

  constructor() { }

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

}
function consolelog(mqAlias: string) {
  throw new Error('Function not implemented.');
}

