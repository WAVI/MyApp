import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
