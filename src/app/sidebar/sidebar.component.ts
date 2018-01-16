import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <div class={{sidebar}}>Sidebar</div>
`,
  styles: [`.sidebar {
    background-color: gray;
    width: 200px;
    height: 500px;
    margin-top: 2rem;
    margin-left: 4rem;
    text-align: center;
  }`]
})
export class SidebarComponent implements OnInit {

  sidebar = 'sidebar';

  constructor() { }

  ngOnInit() {
  }

}
