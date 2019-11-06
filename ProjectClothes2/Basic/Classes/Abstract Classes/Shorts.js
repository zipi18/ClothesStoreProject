var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shorts = /** @class */ (function (_super) {
    __extends(Shorts, _super);
    //המתשנה 'אורך המכנס' ימומש בכל מחלקה בנפרד מאחר והטווח שלו משתנה בין הפריטים//
    function Shorts(manufacturer, name, price, size, color) {
        return _super.call(this, manufacturer, name, price, size, color) || this;
    }
    return Shorts;
}(Item1));
//# sourceMappingURL=Shorts.js.map