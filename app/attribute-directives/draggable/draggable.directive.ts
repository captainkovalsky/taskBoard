import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[myDraggable]',
    host: {
    '(mousedown)': 'onMouseDown($event)',
    '(mousemove)': 'onMouseMove()',
    '(mouseup)': 'onMouseUp()'
   }
})
export class DraggableDirective {
    constructor(el: ElementRef) {
      let startX = 0, startY = 0, x = 0, y = 0;
      const elementNative = el.nativeElement;
      elementNative.style.position = 'relative';
    }

    onMouseDown($event: MouseEvent) {
      console.log('mouse down', $event);
    }

    onMouseMove($event: MouseEvent) {
      console.log('mouse down', $event);
    }

    onMouseUp($event: MouseEvent) {
      console.log('mouse down', $event);
    }
}
