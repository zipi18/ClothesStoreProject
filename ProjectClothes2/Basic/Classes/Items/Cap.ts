class Cap extends Hat {
    printCap: boolean;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, diameter: number, printCap: boolean) {
        super(manufacturer, name, price, size, color, diameter);
this.printCap = printCap;
    }


    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("קוטר:" + "&nbsp" + this.diameterHat + "</br>")
        document.write("האם מכיל הדפס פרסומות?" + "&nbsp" + (this.printCap ? "כן" : "לא") + "</br>")//תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'


    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/16.jpg" />' + "</br>");

    }

}