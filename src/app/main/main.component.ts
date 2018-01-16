import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class={{main}}><p>Main</p></div>
`,
  styles: [`.main {
    background-color: gray;
    height: 500px;
    width: 100%;
    margin-top: 2rem;
    margin-left: 2rem;
    text-align:center;
  }

  :host {
    width: 70%;
  }

  .main p {
    line-height: 500px;
  }`]
})
export class MainComponent implements OnInit {

  main = 'main';
  parent: HTMLElement;
  parentWidth: string;

  onstructor(elementRef: ElementRef) {
    this.parent = elementRef.nativeElement.parentElement;
    this.parentWidth = this.parent.style.width;
  }

  ngOnInit() {
  }

}
