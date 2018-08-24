import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
        <div>{{title}}</div>
        
        <div><p>this is done with pipe</p>{{ 'MESSAGE.HELLO' | translate:param }}</div>
        <p>this is done using directive</p>
        <div [translate]="'MESSAGE.HELLO'" [translateParams]="{value: 'world'}">Hello</div>    `
})
export class AppComponent {
  title = 'translateLib';
  param = {value: 'Bonjour'};

  constructor(translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');

       // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en');
     /* translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
        console.log(res);
        //=> 'hello world'
    });*/
    translate.get('MESSAGE.HELLO', {value: 'world'}).subscribe((res: string) => {
      console.log(res);
      //=> 'hello world'
  });
  }
  
  
}
