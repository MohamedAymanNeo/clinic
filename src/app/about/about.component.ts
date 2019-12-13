import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { timer } from 'rxjs';
import { DynamicScriptLoaderService } from '../shared-services/script-loader/dynamic-script-loader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,AfterViewInit {
  constructor(
    private scriptLoaderSrvc:DynamicScriptLoaderService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.scriptLoaderSrvc.loadScript('app.js')
  }


}
