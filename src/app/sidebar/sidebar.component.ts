import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <div class={{sidebar}}><p>Sidebar</p></div>
`,
  styles: [`.sidebar {

    background-color: gray;
    height: 500px;
    width: 100%;
    margin-top: 2rem;
    margin-left: 4rem;
    text-align: center;
  }

  :host {
    width: 20%;
  }

  .sidebar p {
    line-height: 500px;
  }
  `]})
export class SidebarComponent implements OnInit {

  sidebar = 'sidebar';

  constructor() { }

  ngOnInit() {
  }

}
