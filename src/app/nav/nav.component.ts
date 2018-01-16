import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class={{nav}}>Navbar</div>
  `,
  styles: [`.nav {
    background-color: gray;
    height: 100%;
    font-size: 2rem;
    color: white;
    text-align: center;
  }
  :host {
    width: 100%;
    height: 8%;
  ]`]
})
export class NavComponent implements OnInit {

  nav = 'nav';

  constructor() { }

  ngOnInit() {
  }

}
