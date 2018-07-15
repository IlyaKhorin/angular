import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReleaseHighlighter]'
})
export class ReleaseHighlighterDirective {

  @Input('appReleaseHighlighter')
  set releaseDate(creationDate: Date) {
    let date = new Date(creationDate.getTime());
    if (!date) {
      return;
    } else if (date.getTime() > Date.now()) {
      this.renderer.addClass(this.el.nativeElement, "bg-primary");
    } else if (date.setDate(date.getDate()+14) > Date.now()) {
      this.renderer.addClass(this.el.nativeElement, "bg-success");
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }


}
