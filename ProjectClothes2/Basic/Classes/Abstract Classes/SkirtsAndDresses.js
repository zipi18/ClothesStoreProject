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
var SkirtsAndDresses = /** @class */ (function (_super) {
    __extends(SkirtsAndDresses, _super);
    //הבנאי יקבל את ערכים 'אורך השמלה' ו'האם השמלה עם גב חשוף' כפרמטרים אופציונליים מאחר והם לא ממומשים בכל המחלקות היורשות
    function SkirtsAndDresses(manufacturer, name, price, size, color, scope, dressLength, back) {
        var _this = _super.call(this, manufacturer, name, price, size, color) || this;
        _this.scope_ = scope;
        _this.back = back;
        //במידה והערך אורך השמלה= 'לא נמצא', הבנאי לא יאתחל אותו
        if (dressLength != undefined)
            _this.length = dressLength;
        return _this;
    }
    Object.defineProperty(SkirtsAndDresses.prototype, "scope_", {
        get: function () {
            return this.scope;
        },
        //בדיקה שההיקף עומד בטווח, והחזרת הערך למשתנה
        set: function (scope) {
            if (scope >= 56 && scope <= 86) {
                this.scope = scope;
            }
            else {
                throw Error("הוזן ערך לא תקין. ההיקף חייב להיות בטווח של 56-86");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkirtsAndDresses.prototype, "length", {
        get: function () {
            return this.dressLength;
        },
        //בדיקה שאורך השמלה עומד בטווח, והחזרת הערך למשתנה
        set: function (length) {
            if (length >= 84 && length <= 150) {
                this.dressLength = length;
            }
            else {
                throw Error("הוזן ערך לא תקין. אורך השמלה חייב להיות בטווח של 84-150");
            }
        },
        enumerable: true,
        configurable: true
    });
    return SkirtsAndDresses;
}(Item1));
//# sourceMappingURL=SkirtsAndDresses.js.map