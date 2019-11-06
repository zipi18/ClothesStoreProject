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
var Coats = /** @class */ (function (_super) {
    __extends(Coats, _super);
    function Coats(manufacturer, name, size, price, color, thickness, rainCoat) {
        var _this = _super.call(this, manufacturer, name, price, size, color, thickness) || this;
        _this.rainCoat = rainCoat;
        return _this;
    }
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    Coats.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("עובי בד:" + "&nbsp" + this.thicknessMaterial + "&nbsp" + "מ''מ" + "</br>");
        document.write("האם המעיל הוא מעיל גשם?" + "&nbsp" + (this.rainCoat ? "כן" : "לא") + "</br>"); //תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    Coats.prototype.displayImage = function () {
        document.write('<img src="../image/15.jpg" />' + "</br>");
    };
    return Coats;
}(JacetAndCoats));
//# sourceMappingURL=Coats.js.map