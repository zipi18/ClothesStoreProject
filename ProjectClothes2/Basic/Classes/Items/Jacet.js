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
var Jacet = /** @class */ (function (_super) {
    __extends(Jacet, _super);
    function Jacet(manufacturer, name, size, price, color, thickness, numOfPockets) {
        var _this = _super.call(this, manufacturer, name, price, size, color, thickness) || this;
        _this.pockets = numOfPockets;
        return _this;
    }
    Object.defineProperty(Jacet.prototype, "pockets", {
        get: function () {
            return this.numOfPockets;
        },
        //בדיקה שמספר הכיסים עומד בטווח, והחזרת הערך למשתנה
        set: function (num) {
            if (num >= 2 && num <= 3) {
                this.numOfPockets = num;
            }
            else {
                throw Error("הוזן ערך לא תקין. מספר הכיסים חייב להיות בטווח של 1-5");
            }
        },
        enumerable: true,
        configurable: true
    });
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    Jacet.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("עובי בד:" + "&nbsp" + this.thicknessMaterial + "&nbsp" + "מ''מ" + "</br>");
        document.write("מספר כיסים:" + "&nbsp" + this.pockets + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    Jacet.prototype.displayImage = function () {
        document.write('<img src="../image/14.jpg" />' + "</br>");
    };
    return Jacet;
}(JacetAndCoats));
//# sourceMappingURL=Jacet.js.map