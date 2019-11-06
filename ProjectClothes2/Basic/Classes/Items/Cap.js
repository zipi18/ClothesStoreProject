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
var Cap = /** @class */ (function (_super) {
    __extends(Cap, _super);
    function Cap(manufacturer, name, size, price, color, diameter, printCap) {
        var _this = _super.call(this, manufacturer, name, price, size, color, diameter) || this;
        _this.printCap = printCap;
        return _this;
    }
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    Cap.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("קוטר:" + "&nbsp" + this.diameterHat + "</br>");
        document.write("האם מכיל הדפס פרסומות?" + "&nbsp" + (this.printCap ? "כן" : "לא") + "</br>"); //תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    Cap.prototype.displayImage = function () {
        document.write('<img src="../image/16.jpg" />' + "</br>");
    };
    return Cap;
}(Hat));
//# sourceMappingURL=Cap.js.map