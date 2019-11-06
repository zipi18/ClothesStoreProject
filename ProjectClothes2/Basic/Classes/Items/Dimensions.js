var Dimensions = /** @class */ (function () {
    function Dimensions(lengthB, widthB, heightB) {
        this.lengthBelt = lengthB;
        this.widthBelt = widthB;
        this.heightBelt = heightB;
    }
    Object.defineProperty(Dimensions.prototype, "lengthBelt", {
        get: function () {
            return this.lengthB;
        },
        //בדיקה שהאורך עומד בטווח, והחזרת הערך למשתנה
        set: function (lengthB) {
            if (lengthB >= 74 && lengthB <= 100) {
                this.lengthB = lengthB;
            }
            else {
                throw Error("הוזן ערך לא תקין. אורך החגורה חייב להיות בטווח של 74-100");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "widthBelt", {
        get: function () {
            return this.widthB;
        },
        //בדיקה שהרוחב עומד בטווח, והחזרת הערך למשתנה
        set: function (widthB) {
            if (widthB >= 1 && widthB <= 5) {
                this.widthB = widthB;
            }
            else {
                throw Error("הוזן ערך לא תקין. רוחב החגורה חייב להיות בטווח של 1-5");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "heightBelt", {
        get: function () {
            return this.heightB;
        },
        //בדיקה שהגובה עומד בטווח, והחזרת הערך למשתנה
        set: function (heightB) {
            if (heightB >= 1 && heightB <= 5) {
                this.heightB = heightB;
            }
            else {
                throw Error("הוזן ערך לא תקין. גובה החגורה חייב להיות בטווח של 1-5");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Dimensions;
}());
//# sourceMappingURL=Dimensions.js.map