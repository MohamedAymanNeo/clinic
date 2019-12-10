import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  timer;
  constructor() { }

  ngOnInit() {
    //  this.timer = setInterval(function() {
    //   window.location.reload(true);
    // }, 1000);
  }


  ngOnDestroy() {
    // clearTimeout(this.timer);
  }

}
