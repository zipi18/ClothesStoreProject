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
var ElegantShoes = /** @class */ (function (_super) {
    __extends(ElegantShoes, _super);
    function ElegantShoes(manufacturer, name, size, price, color, material, creationCountry, laces) {
        var _this = _super.call(this, manufacturer, name, price, size, color, creationCountry, laces) || this;
        _this.material = material;
        return _this;
    }
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    ElegantShoes.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("ארץ ייצור:" + "&nbsp" + this.creationCountry + "</br>");
        document.write("האם יש שרוכים?" + "&nbsp" + (this.laces ? "כן" : "לא") + "</br>"); //תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'
        document.write("סוג חומר:" + "&nbsp" + this.material + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    ElegantShoes.prototype.displayImage = function () {
        document.write('<img src="../image/10.jpg" />' + "</br>");
    };
    return ElegantShoes;
}(Shoes));
//# sourceMappingURL=ElegantShoes.js.map