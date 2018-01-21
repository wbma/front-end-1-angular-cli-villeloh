import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class={{appRoot}}>
            <app-header [headerPicUrl]="headerPicUrl"></app-header>
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

  headerPicUrl = 'assets/sky.jpg';
  appRoot = 'appRoot';
  topLevelWidth = '100%';

}
