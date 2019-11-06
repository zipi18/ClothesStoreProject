var Tester = /** @class */ (function () {
    function Tester() {
    }
    //פונקציה המקבלת ערך מספרי מהמשתמש, יוצרת מערך בגודל שהתקבל, ורצה בלולאה לצורך הפעלת כל פונקציות ההפסה
    Tester.prototype.test1 = function () {
        var x = parseInt(prompt("הכנס את כמות הפריטים"));
        while (x <= 0 || x > 2000) {
            var x = parseInt(prompt("יש לרשום מספר בטווח של 1-2000. הכנס שוב את כמות הפריטים"));
        }
        if (x > 0) {
            var items = new Array(x);
            for (var i = 0; i < items.length; i++) {
                var generator = new Generator();
                items[i] = generator.getRandomItem();
                items[i].displayDetails();
                items[i].displayImage();
                document.write("המחיר ללא מע''מ:" + "&nbsp" + items[i].getPriceWithoutVat() + "</br>");
                document.write("שם המוצר:" + "&nbsp" + items[i].brand + "</br>");
                if (items[i] instanceof Belt) {
                    document.write("צבע האבזם:" + "&nbsp" + items[i].colorBuckle + "</br>");
                }
                document.write("<hr/>");
            }
        }
    };
    return Tester;
}());
//# sourceMappingURL=Tester.js.map