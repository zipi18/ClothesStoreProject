class ShortShorts extends Shorts {
    private shortsLength: number;
    material: string;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, shortsLength: number, material: string) {
        super(manufacturer, name, price, size, color);
        this.material = material;
        this.length = shortsLength;

    }


    //בדיקה שאורך המכנס עומד בטווח, והחזרת הערך למשתנה
    protected set length(l_sleeves: number) {
        if (l_sleeves >= 40 && l_sleeves <= 60) {
            this.shortsLength = l_sleeves;
        }
        else {
            throw Error("הוזן ערך לא תקין. אורך המכנס חייב להיות בטווח של 40-60");
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
        document.write("אורך המכנס:" + "&nbsp" + this.length + "</br>")
        document.write("סוג הבד:" + "&nbsp" + this.material + "</br>")

    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/06.jpg" />' + "</br>");

    }

}