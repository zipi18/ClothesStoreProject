class Migbaat extends Hat {
    private height: number;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, diameter: number, height: number) {
        super(manufacturer, name, price, size, color, diameter);
        this.heightMigbaat = height;
    }


    //בדיקה שהגובה עומד בטווח, והחזרת הערך למשתנה
    protected set heightMigbaat(height: number) {
        if (height >= 10 && height <= 20) {
            this.height = height;
        }
        else {
            throw Error("הוזן ערך לא תקין. הגובה חייב להיות בטווח של 10-20");
        }
    }
    protected get heightMigbaat(): number {
        return this.height;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("קוטר:" + "&nbsp" + this.diameterHat + "</br>")
        document.write("גובה:" + "&nbsp" + this.heightMigbaat + "</br>")


    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/17.jpg" />' + "</br>");

    }

}