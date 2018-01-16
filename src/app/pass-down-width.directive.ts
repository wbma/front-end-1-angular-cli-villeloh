import { Directive, ElementRef, AfterViewChecked, Input } from '@angular/core';

@Directive({
  selector: '[appPassDownWidth]'
})
export class PassDownWidthDirective implements AfterViewChecked {

  @Input()
  appPassDownWidth: any;

  constructor(private el: ElementRef) {
  }

  ngAfterViewChecked() {

    this.passWidth(this.el.nativeElement, this.appPassDownWidth);
  }

  passWidth(parent: HTMLElement, width: string) {

    if (!parent) { return; }

    const header = parent.getElementsByTagName('app-header').item(0);
    const nav = parent.getElementsByTagName('app-nav').item(0);
    const footer = parent.getElementsByTagName('app-footer').item(0);

    if (!header || !nav || !footer) {
      return;
    }

    header.setAttribute('style', `width: ${width}px;`);
    nav.setAttribute('style', `width: ${width}px;`);
    footer.setAttribute('style', `width: ${width}px;`);
  }

}
