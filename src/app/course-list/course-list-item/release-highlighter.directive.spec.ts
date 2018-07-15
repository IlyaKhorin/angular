import { ReleaseHighlighterDirective } from './release-highlighter.directive';
import { ElementRef, Renderer2, RendererFactory2 } from '@angular/core';

describe('ReleaseHighlighterDirective', () => {
  it('should create an instance', () => {
    const directive = new ReleaseHighlighterDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
