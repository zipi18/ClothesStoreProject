class ButtonedShirt extends Shirt {
    private numOfButtons: number;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, sleevesLength: number, numOfButtons: number) {
        super(manufacturer, name, price, size, color, sleevesLength);
        this.button = numOfButtons;
    }

    //בדיקה שמספר הכפתורים עומד בטווח, והחזרת הערך למשתנה
    set button(num: number) {
        if (num >= 5 && num <= 7) {
            this.numOfButtons = num;
        }
        else {
            throw Error("הוזן ערך לא תקין. מספר הכפתורים חייב להיות בטווח של 1-5");
        }
    }
    get button(): number {
        return this.numOfButtons;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("אורך השרוול:" + "&nbsp" + this.length + "&nbsp" + "ס''מ" + "</br>")
        document.write("מספר כפתורים:" + "&nbsp" + this.button + "</br>")
    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/02.jpg" />' + "</br>");

    }

}