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
var Glasses = /** @class */ (function (_super) {
    __extends(Glasses, _super);
    function Glasses(manufacturer, name, price, colorFrameGlasses) {
        var _this = _super.call(this, manufacturer, name, price) || this;
        _this.colorFrameGlasses = colorFrameGlasses;
        return _this;
    }
    return Glasses;
}(Item1));
//# sourceMappingURL=Glasses.js.map