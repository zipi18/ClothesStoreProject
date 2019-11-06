class Jins extends Shorts {
    private shortsLength: number;
    tears: boolean;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, shortsLength: number, tears: boolean) {
        super(manufacturer, name, price, size, color);
        this.tears = tears;
        this.length = shortsLength;
    }


    //בדיקה שאורך המכנס עומד בטווח, והחזרת הערך למשתנה
    protected set length(l_sleeves: number) {
        if (l_sleeves >= 80 && l_sleeves <= 85) {
            this.shortsLength = l_sleeves;
        }
        else {
            throw Error("הוזן ערך לא תקין. אורך המכנס חייב להיות בטווח של 80-85");
        }
    }
    protected get length(): number {
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
        document.write("האם מכיל קרעים?" + "&nbsp" + (this.tears ? "כן" : "לא") + "</br>");//תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'

    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/04.jpg" />' + "</br>");

    }

}