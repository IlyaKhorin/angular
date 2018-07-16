import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReleaseHighlighter]'
})
export class ReleaseHighlighterDirective {

  @Input('appReleaseHighlighter')
  set releaseDate(date: Date) {
    let now = new Date(Date.now());
    if (!date) {
      return;
    } else if (date.getTime() > Date.now()) {
      this.renderer.addClass(this.el.nativeElement, "bg-primary");
    } else if (date.getTime() > now.setDate(now.getDate() - 14) ) {
      this.renderer.addClass(this.el.nativeElement, "bg-success");
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }


}
