import { Component } from '@angular/core';

import { ContainerBoxComponent } from './container-box/container-box.component';

@Component({
  selector: 'app-root',
  template: `<div class={{appRoot}}>
              <app-container appPassDownWidth={{topLevelWidth}}></app-container>
            </div>`,
  styles: [`.appRoot {
    width: 1920px;
  }`]
})
export class AppComponent {

  appRoot = 'appRoot';
  topLevelWidth = '1920';

}
