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
var ReadGlasses = /** @class */ (function (_super) {
    __extends(ReadGlasses, _super);
    function ReadGlasses(manufacturer, name, price, colorFrameGlasses, distance) {
        var _this = _super.call(this, manufacturer, name, price, colorFrameGlasses) || this;
        _this.distanceGlasses = distance;
        return _this;
    }
    Object.defineProperty(ReadGlasses.prototype, "distanceGlasses", {
        get: function () {
            return this.distance;
        },
        //בדיקה שהמרחק המומלץ לקריאה עומד בטווח, והחזרת הערך למשתנה
        set: function (distance) {
            if (distance >= 2 && distance <= 6) {
                this.distance = distance;
            }
            else {
                throw Error("הוזן ערך לא תקין. המרחק המומלץ לקריאה חייב להיות בטווח של 10-20");
            }
        },
        enumerable: true,
        configurable: true
    });
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    ReadGlasses.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע המסגרת:" + "&nbsp" + this.colorFrameGlasses + "</br>");
        document.write("מרחק מומלץ לקריאה:" + "&nbsp" + this.distanceGlasses + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    ReadGlasses.prototype.displayImage = function () {
        document.write('<img src="../image/20.jpg" />' + "</br>");
    };
    return ReadGlasses;
}(Glasses));
//# sourceMappingURL=ReadGlasses.js.map