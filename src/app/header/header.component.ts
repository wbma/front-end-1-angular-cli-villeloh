import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class={{header}}>Header</div>
  `,
  styles: [`.header {
    background-color: #1a1b1c;
    height: 9rem;
    font-size: 4rem;
    text-align:center;
  }`]
})
export class HeaderComponent implements OnInit {

  header = 'header';

  constructor() { }

  ngOnInit() {
  }

}
