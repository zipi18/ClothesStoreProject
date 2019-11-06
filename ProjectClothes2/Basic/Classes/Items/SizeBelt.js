var SizeBelt = /** @class */ (function () {
    function SizeBelt(lengthB, widthB, heightB) {
        this.lengthBelt = lengthB;
        this.widthBelt = widthB;
        this.heightBelt = heightB;
    }
    Object.defineProperty(SizeBelt.prototype, "lengthBelt", {
        get: function () {
            return this.lengthB;
        },
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
    Object.defineProperty(SizeBelt.prototype, "widthBelt", {
        get: function () {
            return this.widthB;
        },
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
    Object.defineProperty(SizeBelt.prototype, "heightBelt", {
        get: function () {
            return this.heightB;
        },
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
    return SizeBelt;
}());
//# sourceMappingURL=SizeBelt.js.map