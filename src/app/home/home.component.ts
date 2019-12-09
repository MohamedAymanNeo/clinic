import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService, private translateServ: TranslationService) { }

  ngOnInit() {
  }

}
