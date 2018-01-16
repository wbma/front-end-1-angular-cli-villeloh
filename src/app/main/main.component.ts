import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class={{main}}>Main</div>
`,
  styles: [`.main {
    background-color: gray;
    width: 400px;
    height: 500px;
    margin-top: 2rem;
    margin-left: 4rem;
    text-align:center;
  }`]
})
export class MainComponent implements OnInit {

  main = 'main';

  constructor() { }

  ngOnInit() {
  }

}
