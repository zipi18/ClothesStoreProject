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
var WomenShirt = /** @class */ (function (_super) {
    __extends(WomenShirt, _super);
    function WomenShirt(manufacturer, name, size, price, color, sleevesLength, material) {
        var _this = _super.call(this, manufacturer, name, price, size, color, sleevesLength) || this;
        _this.material = material;
        return _this;
    }
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    WomenShirt.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("אורך השרוול:" + "&nbsp" + this.length + "</br>");
        document.write("סוג הבד:" + "&nbsp" + this.material + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    WomenShirt.prototype.displayImage = function () {
        document.write('<img src="../image/03.jpg" />' + "</br>");
    };
    return WomenShirt;
}(Shirt));
//# sourceMappingURL=WomenShirt.js.map