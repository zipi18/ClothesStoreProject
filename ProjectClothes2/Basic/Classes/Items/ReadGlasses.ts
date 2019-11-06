class ReadGlasses extends Glasses {
    distance: number;


    constructor(manufacturer: string, name: string, price: number, colorFrameGlasses: string, distance: number) {
        super(manufacturer, name, price, colorFrameGlasses);
        this.distanceGlasses = distance;
    }


    //בדיקה שהמרחק המומלץ לקריאה עומד בטווח, והחזרת הערך למשתנה
    protected set distanceGlasses(distance: number) {
        if (distance >= 2 && distance <= 6) {
            this.distance = distance;
        }
        else {
            throw Error("הוזן ערך לא תקין. המרחק המומלץ לקריאה חייב להיות בטווח של 10-20");
        }
    }
    protected get distanceGlasses(): number {
        return this.distance;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע המסגרת:" + "&nbsp" + this.colorFrameGlasses + "</br>")
        document.write("מרחק מומלץ לקריאה:" + "&nbsp" + this.distanceGlasses + "</br>")


    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/20.jpg" />' + "</br>");

    }

}