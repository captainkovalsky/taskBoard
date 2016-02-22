import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[myDraggable]',
    host: {
    '(mousedown)': 'onMouseDown($event)',
    '(mousemove)': 'onMouseMove($event)',
    '(mouseup)': 'endDrag($event)'
   }
})
export class DraggableDirective {
    private startX: number;
    private startY: number;
    private x: number;
    private y: number;
    private isMoved: boolean;

    private zIndex: Number;

    constructor(private el: ElementRef) {
      this.isMoved = false;
      this.startX = 0;
      this.startY = 0;
      this.x = 0;
      this.y = 0;
      el.nativeElement.style.position = 'relative';
    }

    onMouseDown($event: MouseEvent) {
      event.preventDefault();
      this.startX = $event.clientX - this.x;
      this.startY = $event.clientY - this.y;
      this.isMoved = true;
      this.el.nativeElement.style.zIndex += 1;
    }

    onMouseMove($event: MouseEvent, el: ElementRef) {
      if (!this.isMoved) {
        return;
      }

      this.x = $event.clientX - this.startX;
      this.y = $event.clientY - this.startY;
      this.el.nativeElement.style.top = `${this.y}px`;
      this.el.nativeElement.style.left = `${this.x}px`;
  }

    endDrag($event: MouseEvent) {
      this.isMoved = false;
      this.el.nativeElement.style.zIndex -= 1;
    }
}
