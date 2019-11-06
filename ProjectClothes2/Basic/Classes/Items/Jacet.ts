class Jacet extends JacetAndCoats {
    private numOfPockets: number;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, thickness: number, numOfPockets: number) {
        super(manufacturer, name, price, size, color, thickness);
        this.pockets = numOfPockets;
    }


    //בדיקה שמספר הכיסים עומד בטווח, והחזרת הערך למשתנה
    set pockets(num: number) {
        if (num >= 2 && num <= 3) {
            this.numOfPockets = num;
        }
        else {
            throw Error("הוזן ערך לא תקין. מספר הכיסים חייב להיות בטווח של 1-5");
        }
    }
    get pockets(): number {
        return this.numOfPockets;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("עובי בד:" + "&nbsp" + this.thicknessMaterial + "&nbsp" + "מ''מ" + "</br>")
        document.write("מספר כיסים:" + "&nbsp" + this.pockets + "</br>")
    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/14.jpg" />' + "</br>");

    }

}