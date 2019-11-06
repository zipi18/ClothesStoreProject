class SportShoes extends Shoes {
    createDate: Date;


    constructor(createDate: Date, manufacturer: string, name: string, size: number, price: number, color: string, creationCountry: string, laces: boolean) {
        super(manufacturer, name, price, size, color, creationCountry, laces);
        this.createDate = createDate;
    }


    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("ארץ ייצור:" + "&nbsp" + this.creationCountry + "</br>")
        document.write("האם יש שרוכים?" + "&nbsp" + (this.laces ? "כן" : "לא") + "</br>")//תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'
        document.write("תאריך ייצור:" + "&nbsp" + this.createDate.toLocaleDateString() + "</br>")
    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/11.jpg" />' + "</br>");
    }

}
