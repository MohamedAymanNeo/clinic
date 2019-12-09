import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService, private translateServ: TranslationService) {
    // translate.addLangs(['en', 'it', 'gr']);
    // translate.setDefaultLang('en');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|it|gr/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
