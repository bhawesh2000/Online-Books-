import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  
  title = 'ThinkTac';
  mediaSub:Subscription | undefined;
  deviceXs:boolean;

  constructor(public mediaObserver:MediaObserver){}

  ngOnInit(){

    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      consolelog(result.mqAlias);
      this.deviceXs=result.mqAlias ==='xs' ? true : false;
    }
    );
  }

  ngOnDestroy(): void {
    this.mediaSub?.unsubscribe();
}
}
function consolelog(mqAlias: string) {
  throw new Error('Function not implemented.');
}

