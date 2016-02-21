System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DraggableDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DraggableDirective = (function () {
                function DraggableDirective(el) {
                    var startX = 0, startY = 0, x = 0, y = 0;
                    var elementNative = el.nativeElement;
                    elementNative.style.position = 'relative';
                }
                DraggableDirective.prototype.onMouseDown = function ($event) {
                    console.log('mouse down', $event);
                };
                DraggableDirective.prototype.onMouseMove = function ($event) {
                    console.log('mouse down', $event);
                };
                DraggableDirective.prototype.onMouseUp = function ($event) {
                    console.log('mouse down', $event);
                };
                DraggableDirective = __decorate([
                    core_1.Directive({
                        selector: '[myDraggable]',
                        host: {
                            '(mousedown)': 'onMouseDown($event)',
                            '(mousemove)': 'onMouseMove()',
                            '(mouseup)': 'onMouseUp()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DraggableDirective);
                return DraggableDirective;
            })();
            exports_1("DraggableDirective", DraggableDirective);
        }
    }
});
//# sourceMappingURL=draggable.directive.js.map