var Item1 = /** @class */ (function () {
    //הבנאי יקבל את ערכים 'מידה' ו'צבע' כפרמטרים אופציונליים מאחר והם לא ממומשים בכל המחלקות היורשות
    function Item1(manufacturer, name, price, size, color) {
        this.manufacturer = manufacturer;
        this.name = name;
        this.priceOfItem1 = price;
        //במידה והערך מידה= 'לא נמצא', הבנאי לא יאתחל אותו
        if (size != undefined)
            this.sizeOfItem1 = size;
        this.color = color;
    }
    Object.defineProperty(Item1.prototype, "priceOfItem1", {
        get: function () {
            return this.price;
        },
        //בדיקה שהמחיר עומד בטווח, והחזרת הערך למשתנה
        set: function (price) {
            if (price >= 50 && price <= 500) {
                price = parseInt(price.toString());
                this.price = price;
            }
            else {
                throw Error("הוזן ערך לא תקין. מחיר חייב להיות בטווח של 50-500 ");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item1.prototype, "sizeOfItem1", {
        get: function () {
            return this.size;
        },
        //בדיקה שהמידה עומדת בטווח, והחזרת הערך למשתנה
        set: function (size) {
            if (size >= 36 && size <= 48) {
                size = parseInt(size.toString());
                this.size = size;
            }
            else {
                throw Error(" 36-48 הוזן ערך לא תקין. המידה חייבת להיות בטווח של ");
            }
        },
        enumerable: true,
        configurable: true
    });
    //פונקציה המחזירה מחיר ללא מע"מ
    Item1.prototype.getPriceWithoutVat = function () {
        var noMaam = 17;
        noMaam = parseInt((this.priceOfItem1 - ((this.priceOfItem1 * noMaam) / 100)).toString());
        return noMaam;
    };
    Object.defineProperty(Item1.prototype, "brand", {
        //פונקציה המחזירה את שם היצרן + הדגם
        get: function () {
            var x;
            x = this.manufacturer + "&nbsp" + this.name;
            return x;
        },
        enumerable: true,
        configurable: true
    });
    return Item1;
}());
//# sourceMappingURL=Item1.js.map