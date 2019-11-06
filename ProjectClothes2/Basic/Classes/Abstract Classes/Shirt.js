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
var Shirt = /** @class */ (function (_super) {
    __extends(Shirt, _super);
    function Shirt(manufacturer, name, price, size, color, sleevesLength) {
        var _this = _super.call(this, manufacturer, name, price, size, color) || this;
        _this.length = sleevesLength;
        return _this;
    }
    Object.defineProperty(Shirt.prototype, "length", {
        get: function () {
            return this.sleevesLength;
        },
        //בדיקה שאורך השרוולים עומד בטווח, והחזרת הערך למשתנה
        set: function (l_sleeves) {
            if (l_sleeves >= 75 && l_sleeves <= 97) {
                this.sleevesLength = l_sleeves;
            }
            else {
                throw Error("הוזן ערך לא תקין. אורך השרוול חייב להיות בטווח של 75-97");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Shirt;
}(Item1));
//פונקציה המחזירה את יצרן המשקפיים באופן רנדומלי
//# sourceMappingURL=Shirt.js.map