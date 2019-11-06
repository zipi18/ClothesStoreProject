class Skirt extends SkirtsAndDresses {
    typeSkirt: string;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, typeSkirt: string, scope: number) {
        super(manufacturer, name, price, size, color, scope);
        this.typeSkirt = typeSkirt;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("היקף החצאית:" + "&nbsp" + this.scope_ + "</br>")
        document.write("סוג החצאית:" + "&nbsp" + this.typeSkirt + "</br>")

    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/07.jpg" />' + "</br>");

    }

}