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
var FabricPants = /** @class */ (function (_super) {
    __extends(FabricPants, _super);
    function FabricPants(manufacturer, name, size, price, color, shortsLength, numOfPockets) {
        var _this = _super.call(this, manufacturer, name, price, size, color) || this;
        _this.pockets = numOfPockets;
        _this.length = shortsLength;
        return _this;
    }
    Object.defineProperty(FabricPants.prototype, "pockets", {
        get: function () {
            return this.numOfPockets;
        },
        //בדיקה שמספר הכיסים עומד בטווח, והחזרת הערך למשתנה
        set: function (num) {
            if (num >= 2 && num <= 4) {
                this.numOfPockets = num;
            }
            else {
                throw Error("הוזן ערך לא תקין. מספר הכיסים חייב להיות בטווח של 1-5");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabricPants.prototype, "length", {
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
    FabricPants.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("אורך המכנס:" + "&nbsp" + this.length + "&nbsp" + "ס''מ" + "</br>");
        document.write("מספר כיסים:" + "&nbsp" + this.pockets + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    FabricPants.prototype.displayImage = function () {
        document.write('<img src="../image/05.jpg" />' + "</br>");
    };
    return FabricPants;
}(Shorts));
//# sourceMappingURL=FabricPants.js.map