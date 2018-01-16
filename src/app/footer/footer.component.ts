import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class={{footer}}>Footer</div>
  `,
  styles: [`.footer {
    background-color: black;
    height: 50px;
    margin-top: 2rem;
    text-align:center;
    color: white;
  }`]
})
export class FooterComponent implements OnInit {

  footer = 'footer';

  constructor() { }

  ngOnInit() {
  }

}
