import { Component } from '@angular/core';

import { ContainerBoxComponent } from './container-box/container-box.component';

@Component({
  selector: 'app-root',
  template: `<div class={{appRoot}}>
            <app-header></app-header>
            <app-nav></app-nav>
            <app-main></app-main>
            <app-sidebar></app-sidebar>
            <app-footer></app-footer>
            </div>`,
  styles: [`.appRoot {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  :host {
    width: 100%;
    height: 100%;
  }`]
})
export class AppComponent {

  appRoot = 'appRoot';
  topLevelWidth = '100%';

}
