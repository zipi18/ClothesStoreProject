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
var HilShoes = /** @class */ (function (_super) {
    __extends(HilShoes, _super);
    function HilShoes(manufacturer, name, size, price, color, typeOgHil, creationCountry) {
        var _this = _super.call(this, manufacturer, name, price, size, color, creationCountry) || this;
        _this.typeOgHil = typeOgHil;
        return _this;
    }
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    HilShoes.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("ארץ ייצור:" + "&nbsp" + this.creationCountry + "</br>");
        document.write("סוג העקב:" + "&nbsp" + this.typeOgHil + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    HilShoes.prototype.displayImage = function () {
        document.write('<img src="../image/13.jpg" />' + "</br>");
    };
    return HilShoes;
}(Shoes));
//# sourceMappingURL=HilShoes.js.map