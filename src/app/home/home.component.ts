import { Component, OnInit, AfterViewInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { DynamicScriptLoaderService } from '../shared-services/script-loader/dynamic-script-loader.service';
declare const $ :any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  rights = [
    'Be treated in a manner respectful to your personal privacy and dignity.',
    'Patients shall be free from all forms of abuse and harassment.',
    'Receive assistance in a prompt, courteous, respectful and responsible manner.',
    'Receive care in a safe setting.',
    'Receive a list of participating providers.',
    'Be referred, according to your needs, to a provider suitable to care for your condition.'
  ];

  responsibilities = [
    'Provide honest, complete information to those providing medical care.',
    'Responsible for informing your provider of a Living Will or Advance Directive, or any document that could affect care.',
    'Know the benefits and exclusions of your health insurance coverage.',
    'Know how to access services in routine, urgent and emergency situations.',
    'Follow the advice of your Primary Care Provider (PCP) and consider the likely consequences when you refuse to comply.',
    'Notify your provider of changes in address, phone number and insurance information in a timely manner.'
  ];

  constructor(
    public translate: TranslateService,
    private translateServ: TranslationService,
    private scriptLoaderSrvc: DynamicScriptLoaderService) { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    this.scriptLoaderSrvc.loadScript('app.js');
  }



}
