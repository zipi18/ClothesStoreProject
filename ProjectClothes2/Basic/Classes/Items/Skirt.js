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
var Skirt = /** @class */ (function (_super) {
    __extends(Skirt, _super);
    function Skirt(manufacturer, name, size, price, color, typeSkirt, scope) {
        var _this = _super.call(this, manufacturer, name, price, size, color, scope) || this;
        _this.typeSkirt = typeSkirt;
        return _this;
    }
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    Skirt.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("היקף החצאית:" + "&nbsp" + this.scope_ + "</br>");
        document.write("סוג החצאית:" + "&nbsp" + this.typeSkirt + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    Skirt.prototype.displayImage = function () {
        document.write('<img src="../image/07.jpg" />' + "</br>");
    };
    return Skirt;
}(SkirtsAndDresses));
//# sourceMappingURL=Skirt.js.map