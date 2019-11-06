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
var Belt = /** @class */ (function (_super) {
    __extends(Belt, _super);
    function Belt(manufacturer, name, price, colorBelt, colorBuckle, materialBelt) {
        var _this = _super.call(this, manufacturer, name, price) || this;
        _this.materialBelt = materialBelt;
        _this.colorBelt = colorBelt;
        _this.colorBuckle = colorBuckle;
        _this.sizeB = new Dimensions(_this.randomMinToMax(74, 100), _this.randomMinToMax(1, 5), _this.randomMinToMax(1, 5)); //הפעלת מחלקת מידות חגורה
        return _this;
    }
    // פונקציה המחזירה מספר רנדומלי בין 2 ערכים מתקבלים לצורך מימוש מידות החגורה
    Belt.prototype.randomMinToMax = function (min, max) {
        var x;
        x = Math.random();
        x = x * (max - min + 1) + min;
        x = Math.floor(x);
        return x;
    };
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    Belt.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע החגורה:" + "&nbsp" + this.colorBelt + "</br>");
        document.write("צבע האבזם:" + "&nbsp" + this.colorBuckle + "</br>");
        document.write("חומר האבזם:" + "&nbsp" + this.materialBelt + "</br>");
        document.write("מידות החגורה:" + "&nbsp" + " אורך:" + "&nbsp" + this.sizeB.lengthBelt + " ס''מ," + "&nbsp" + " רוחב:" + "&nbsp" + this.sizeB.widthBelt + " מ''מ," + "&nbsp" + " גובה:" + "&nbsp" + this.sizeB.heightBelt + " ס''מ" + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    Belt.prototype.displayImage = function () {
        document.write('<img src="../image/18.jpg" />' + "</br>");
    };
    return Belt;
}(Item1));
//# sourceMappingURL=Belt.js.map