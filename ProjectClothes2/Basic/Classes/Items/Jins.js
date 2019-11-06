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
var Jins = /** @class */ (function (_super) {
    __extends(Jins, _super);
    function Jins(manufacturer, name, size, price, color, shortsLength, tears) {
        var _this = _super.call(this, manufacturer, name, price, size, color) || this;
        _this.tears = tears;
        _this.length = shortsLength;
        return _this;
    }
    Object.defineProperty(Jins.prototype, "length", {
        get: function () {
            return this.shortsLength;
        },
        //בדיקה שאורך המכנס עומד בטווח, והחזרת הערך למשתנה
        set: function (l_sleeves) {
            if (l_sleeves >= 80 && l_sleeves <= 85) {
                this.shortsLength = l_sleeves;
            }
            else {
                throw Error("הוזן ערך לא תקין. אורך המכנס חייב להיות בטווח של 80-85");
            }
        },
        enumerable: true,
        configurable: true
    });
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    Jins.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("אורך המכנס:" + "&nbsp" + this.length + "&nbsp" + "ס''מ" + "</br>");
        document.write("האם מכיל קרעים?" + "&nbsp" + (this.tears ? "כן" : "לא") + "</br>"); //תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    Jins.prototype.displayImage = function () {
        document.write('<img src="../image/04.jpg" />' + "</br>");
    };
    return Jins;
}(Shorts));
//# sourceMappingURL=Jins.js.map