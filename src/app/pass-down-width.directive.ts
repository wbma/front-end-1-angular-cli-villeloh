// This was ultimately unnecessary, because I finally learned the correct way to size things (with :host)...
// I'm leaving this here because I haven't the heart to delete it, having spend some precious hours on it :l
// (Not used anywhere atm.)

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

    header.setAttribute('style', `width: ${width};`);
    nav.setAttribute('style', `width: ${width};`);
    footer.setAttribute('style', `width: ${width};`);
  }

}
