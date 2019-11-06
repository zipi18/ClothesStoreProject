class Coats extends JacetAndCoats {
    rainCoat: boolean;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, thickness: number, rainCoat: boolean) {
        super(manufacturer, name, price, size, color, thickness);
        this.rainCoat = rainCoat;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("עובי בד:" + "&nbsp" + this.thicknessMaterial + "&nbsp" + "מ''מ" + "</br>")
        document.write("האם המעיל הוא מעיל גשם?" + "&nbsp" + (this.rainCoat ? "כן" : "לא") + "</br>")//תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'
    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/15.jpg" />' + "</br>");

    }

}