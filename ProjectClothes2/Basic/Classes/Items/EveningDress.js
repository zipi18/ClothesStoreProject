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
var EveningDress = /** @class */ (function (_super) {
    __extends(EveningDress, _super);
    function EveningDress(manufacturer, name, size, price, color, material, scope, dressLength, back) {
        var _this = _super.call(this, manufacturer, name, price, size, color, scope, dressLength, back) || this;
        _this.material = material;
        return _this;
    }
    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    EveningDress.prototype.displayDetails = function () {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>");
        document.write("דגם:" + "&nbsp" + this.name + "</br>");
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>");
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>");
        document.write("צבע:" + "&nbsp" + this.color + "</br>");
        document.write("היקף השמלה:" + "&nbsp" + this.scope_ + "</br>");
        document.write("אורך השמלה:" + "&nbsp" + this.length + "</br>");
        document.write("האם השמלה עם גב חשוף?" + "&nbsp" + (this.back ? "כן" : "לא") + "</br>"); //תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'
        document.write("סוג הבד:" + "&nbsp" + this.material + "</br>");
    };
    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    EveningDress.prototype.displayImage = function () {
        document.write('<img src="../image/09.jpg" />' + "</br>");
    };
    return EveningDress;
}(SkirtsAndDresses));
//# sourceMappingURL=EveningDress.js.map