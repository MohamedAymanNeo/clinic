import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'it', 'gr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|it|gr/) ? browserLang : 'en');
  }
}
