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
var Shoes = /** @class */ (function (_super) {
    __extends(Shoes, _super);
    //הבנאי יקבל את הערך 'האם יש שרוכים' כפרמטר אופציונלי מאחר והוא לא ממומש בכל המחלקות היורשות
    function Shoes(manufacturer, name, price, size, color, creationCountry, laces) {
        var _this = _super.call(this, manufacturer, name, price, size, color) || this;
        _this.creationCountry = creationCountry;
        _this.laces = laces;
        return _this;
    }
    return Shoes;
}(Item1));
//# sourceMappingURL=Shoes.js.map