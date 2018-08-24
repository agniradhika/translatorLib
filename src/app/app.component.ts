import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      <h2>{{ 'HOME.TITLE' | translate }}</h2>
      <label>
        {{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
    </div>
       `
})
export class AppComponent {
  title = 'translateLib';
  param = {value: 'Bonjour'};

  constructor(private translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.addLangs(['en','fr']);
      translate.setDefaultLang('en');
       // the lang to use, if the lang isn't available, it will use the current loader to get them
      //translate.use('en');
    
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  
  console.log(this.translate.currentLoader)
  console.log(this.translate.getBrowserLang)
  }
  
  
}
