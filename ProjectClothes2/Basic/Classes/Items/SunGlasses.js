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
var SunGlasses = /** @class */ (function (_super) {
    __extends(SunGlasses, _super);
    function SunGlasses(manufacturer, name, price, colorFrameGlasses, colorGlassGlasses) {
        var _this = _super.call(this, manufacturer, name, price, colorFrameGlasses) || this;
        _this.colorGlassGlasses = colorGlassGlasses;
        return _this;
    }
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    SunGlasses.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע המסגרת:" + "&nbsp" + this.colorFrameGlasses + "</br>");
        document.write("צבע הזכוכית:" + "&nbsp" + this.colorGlassGlasses + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    SunGlasses.prototype.displayImage = function () {
        document.write('<img src="../image/19.jpg" />' + "</br>");
    };
    return SunGlasses;
}(Glasses));
//# sourceMappingURL=SunGlasses.js.map