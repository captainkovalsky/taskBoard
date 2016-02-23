import {Directive, ElementRef, Input} from 'angular2/core';

let moveFn: any;
let upFn: any;
const BODY = document.querySelector('body');
@Directive({
    selector: '[myDraggable]',
    host: {
    '(mousedown)': 'onMouseDown($event)'
   }
})
export class DraggableDirective {
    private startX: number;
    private startY: number;
    private x: number;
    private y: number;

    private zIndex: Number;

    constructor(private el: ElementRef) {
      this.startX = 0;
      this.startY = 0;
      this.x = 0;
      this.y = 0;
      el.nativeElement.style.position = 'relative';
    }

    onMouseDown($event: MouseEvent) {
      $event.preventDefault();
      this.startX = $event.clientX - this.x;
      this.startY = $event.clientY - this.y;
      this.el.nativeElement.style.zIndex += 1;

      moveFn = this.onMouseMove(this.el).bind(this);
      upFn = this.endDrag.bind(this);

      BODY.addEventListener('mousemove', moveFn);
      BODY.addEventListener('mouseup', upFn);
    }

    onMouseMove(el: ElementRef) {
      return function($event: MouseEvent) {
        this.x = $event.clientX - this.startX;
        this.y = $event.clientY - this.startY;
        el.nativeElement.style.top = `${this.y}px`;
        el.nativeElement.style.left = `${this.x}px`;
      }
  }

    endDrag($event: MouseEvent) {
      this.el.nativeElement.style.zIndex -= 1;
      BODY.removeEventListener('mousemove', moveFn);
      BODY.removeEventListener('mouseup', upFn);
    }
}
