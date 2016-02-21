System.register(['angular2/core', './attribute-directives/highlight/highlight', './attribute-directives/draggable/draggable.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, highlight_1, draggable_directive_1;
    var CARDS, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_1_1) {
                highlight_1 = highlight_1_1;
            },
            function (draggable_directive_1_1) {
                draggable_directive_1 = draggable_directive_1_1;
            }],
        execute: function() {
            CARDS = [];
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.cards = CARDS;
                    var i;
                    for (i = 0; i < 7; i++) {
                        CARDS.push({ id: i, title: "Task " + (i + 1) });
                    }
                    console.log('cards', CARDS);
                }
                AppComponent.prototype.onSelect = function (card) { this.selectedCard = card; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [highlight_1.HighlightDirective, draggable_directive_1.DraggableDirective],
                        template: "\n    <div class=\"tasks\">\n    <div class=\"task\" myHighlight myDraggable *ngFor=\"#card of cards\" [class.selected]=\"card === selectedCard\" (click)=\"onSelect(card)\">{{card.title}}</div>\n    </div>\n    ",
                        styles: ["\n      .tasks {\n         display: inline-flex;\n      }\n\n      .task {\n        width:        250px;\n        height:       75px;\n        border:       1px solid black;\n        margin-right: 10px;\n      }\n\n      .task:last-child {\n        margin-right: inherit;\n      }\n\n      .selected {\n        color:      blue;\n        background-color: green !important;\n      }\n\n      .highlight {\n        background-color: yellow;\n      }\n      "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map