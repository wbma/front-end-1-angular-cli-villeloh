import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class={{header}}>Header</div>
  `,
  styles: [`.header {
    background-color: #1a1b1c;
    font-size: 2rem;
    text-align:center;
    width: 100%;
    height: 100%;
    color: white;
  }

  :host {
    height: 20%;
    width: 100%;
  }`]
})
export class HeaderComponent implements OnInit {

  header = 'header';

  constructor() { }

  ngOnInit() {
  }

}
