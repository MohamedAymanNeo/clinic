import { Component, OnInit, AfterViewInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { DynamicScriptLoaderService } from '../shared-services/script-loader/dynamic-script-loader.service';
declare const $ :any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor(
    public translate: TranslateService,
    private translateServ: TranslationService,
    private scriptLoaderSrvc : DynamicScriptLoaderService
    ) { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    this.scriptLoaderSrvc.loadScript('app.js')
  }

}
