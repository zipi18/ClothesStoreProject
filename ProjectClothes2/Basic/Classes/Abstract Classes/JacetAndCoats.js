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
var JacetAndCoats = /** @class */ (function (_super) {
    __extends(JacetAndCoats, _super);
    function JacetAndCoats(manufacturer, name, price, size, color, thickness) {
        var _this = _super.call(this, manufacturer, name, price, size, color) || this;
        _this.thicknessMaterial = thickness;
        return _this;
    }
    Object.defineProperty(JacetAndCoats.prototype, "thicknessMaterial", {
        get: function () {
            return this.thickness;
        },
        //בדיקה שעובי הבד עומד בטווח, והחזרת הערך למשתנה
        set: function (thickness) {
            if (thickness >= 1 && thickness <= 10) {
                this.thickness = thickness;
            }
            else {
                throw Error("הוזן ערך לא תקין. עובי הבד חייב להיות בטווח של 1-10");
            }
        },
        enumerable: true,
        configurable: true
    });
    return JacetAndCoats;
}(Item1));
//# sourceMappingURL=JacetAndCoats.js.map