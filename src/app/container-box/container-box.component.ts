import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainComponent } from '../main/main.component';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-container',
  template: `<div class={{containerBox}}>
              <app-header></app-header>
              <app-nav></app-nav>
              <app-main></app-main>
              <app-sidebar></app-sidebar>
              <app-footer></app-footer>
            </div>`,
  styles: [`.containerBox {

            display: flex;
            flex-wrap: wrap;

            :host {
              height: 100%;
            }
        }`]
})
export class ContainerBoxComponent implements OnInit {

  private containerBox = 'containerBox';

  ngOnInit() {
  }

}
