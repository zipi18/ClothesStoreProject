class FabricPants extends Shorts {
    private numOfPockets: number;
    private shortsLength: number;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, shortsLength: number, numOfPockets: number) {
        super(manufacturer, name, price, size, color);
        this.pockets = numOfPockets;
        this.length = shortsLength;

    }


    //בדיקה שמספר הכיסים עומד בטווח, והחזרת הערך למשתנה
    set pockets(num: number) {
        if (num >= 2 && num <= 4) {
            this.numOfPockets = num;
        }
        else {
            throw Error("הוזן ערך לא תקין. מספר הכיסים חייב להיות בטווח של 1-5");
        }
    }
    get pockets(): number {
        return this.numOfPockets;
    }

    //בדיקה שאורך המכנס עומד בטווח, והחזרת הערך למשתנה
    set length(l_sleeves: number) {
        if (l_sleeves >= 80 && l_sleeves <= 85) {
            this.shortsLength = l_sleeves;
        }
        else {
            throw Error("הוזן ערך לא תקין. אורך המכנס חייב להיות בטווח של 80-85");
        }
    }
    get length(): number {
        return this.shortsLength;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("אורך המכנס:" + "&nbsp" + this.length + "&nbsp" + "ס''מ" + "</br>")
        document.write("מספר כיסים:" + "&nbsp" + this.pockets + "</br>")
    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/05.jpg" />' + "</br>");

    }

}