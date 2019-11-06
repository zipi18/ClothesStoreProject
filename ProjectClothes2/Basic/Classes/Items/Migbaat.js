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
var Migbaat = /** @class */ (function (_super) {
    __extends(Migbaat, _super);
    function Migbaat(manufacturer, name, size, price, color, diameter, height) {
        var _this = _super.call(this, manufacturer, name, price, size, color, diameter) || this;
        _this.heightMigbaat = height;
        return _this;
    }
    Object.defineProperty(Migbaat.prototype, "heightMigbaat", {
        get: function () {
            return this.height;
        },
        //בדיקה שהגובה עומד בטווח, והחזרת הערך למשתנה
        set: function (height) {
            if (height >= 10 && height <= 20) {
                this.height = height;
            }
            else {
                throw Error("הוזן ערך לא תקין. הגובה חייב להיות בטווח של 10-20");
            }
        },
        enumerable: true,
        configurable: true
    });
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    Migbaat.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("קוטר:" + "&nbsp" + this.diameterHat + "</br>");
        document.write("גובה:" + "&nbsp" + this.heightMigbaat + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    Migbaat.prototype.displayImage = function () {
        document.write('<img src="../image/17.jpg" />' + "</br>");
    };
    return Migbaat;
}(Hat));
//# sourceMappingURL=Migbaat.js.map