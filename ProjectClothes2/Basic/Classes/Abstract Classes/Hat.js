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
var Hat = /** @class */ (function (_super) {
    __extends(Hat, _super);
    function Hat(manufacturer, name, price, size, color, diameter) {
        var _this = _super.call(this, manufacturer, name, price, size, color) || this;
        _this.diameterHat = diameter;
        return _this;
    }
    Object.defineProperty(Hat.prototype, "diameterHat", {
        get: function () {
            return this.diameter;
        },
        //בדיקה שהקוטר עומד בטווח, והחזרת הערך למשתנה
        set: function (diameter) {
            if (diameter >= 50 && diameter <= 65) {
                this.diameter = diameter;
            }
            else {
                throw Error("הוזן ערך לא תקין. הקוטר חייב להיות בטווח של 50-65");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Hat;
}(Item1));
//# sourceMappingURL=Hat.js.map