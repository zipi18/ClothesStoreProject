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
var ButtonedShirt = /** @class */ (function (_super) {
    __extends(ButtonedShirt, _super);
    function ButtonedShirt(manufacturer, name, size, price, color, sleevesLength, numOfButtons) {
        var _this = _super.call(this, manufacturer, name, price, size, color, sleevesLength) || this;
        _this.button = numOfButtons;
        return _this;
    }
    Object.defineProperty(ButtonedShirt.prototype, "button", {
        get: function () {
            return this.numOfButtons;
        },
        //בדיקה שמספר הכפתורים עומד בטווח, והחזרת הערך למשתנה
        set: function (num) {
            if (num >= 5 && num <= 7) {
                this.numOfButtons = num;
            }
            else {
                throw Error("הוזן ערך לא תקין. מספר הכפתורים חייב להיות בטווח של 1-5");
            }
        },
        enumerable: true,
        configurable: true
    });
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    ButtonedShirt.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("אורך השרוול:" + "&nbsp" + this.length + "&nbsp" + "ס''מ" + "</br>");
        document.write("מספר כפתורים:" + "&nbsp" + this.button + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    ButtonedShirt.prototype.displayImage = function () {
        document.write('<img src="../image/02.jpg" />' + "</br>");
    };
    return ButtonedShirt;
}(Shirt));
//# sourceMappingURL=ButtonShirt.js.map