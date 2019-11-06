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
var ShortShorts = /** @class */ (function (_super) {
    __extends(ShortShorts, _super);
    function ShortShorts(manufacturer, name, size, price, color, shortsLength, material) {
        var _this = _super.call(this, manufacturer, name, price, size, color) || this;
        _this.material = material;
        _this.length = shortsLength;
        return _this;
    }
    Object.defineProperty(ShortShorts.prototype, "length", {
        get: function () {
            return this.shortsLength;
        },
        //בדיקה שאורך המכנס עומד בטווח, והחזרת הערך למשתנה
        set: function (l_sleeves) {
            if (l_sleeves >= 40 && l_sleeves <= 60) {
                this.shortsLength = l_sleeves;
            }
            else {
                throw Error("הוזן ערך לא תקין. אורך המכנס חייב להיות בטווח של 40-60");
            }
        },
        enumerable: true,
        configurable: true
    });
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    ShortShorts.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("אורך המכנס:" + "&nbsp" + this.length + "</br>");
        document.write("סוג הבד:" + "&nbsp" + this.material + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    ShortShorts.prototype.displayImage = function () {
        document.write('<img src="../image/06.jpg" />' + "</br>");
    };
    return ShortShorts;
}(Shorts));
//# sourceMappingURL=ShortShorts.js.map