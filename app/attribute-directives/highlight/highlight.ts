import {Directive, ElementRef, Input} from 'angular2/core';
const HIGHLIGHT_CLASS = 'highlight';
@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.className += ` ${HIGHLIGHT_CLASS}`;
    }
}
