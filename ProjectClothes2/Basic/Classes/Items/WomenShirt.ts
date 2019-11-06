class WomenShirt extends Shirt {
    material: string;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, sleevesLength: number, material: string) {
        super(manufacturer, name, price, size, color, sleevesLength);
        this.material = material;
    }


    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("אורך השרוול:" + "&nbsp" + this.length + "</br>")
        document.write("סוג הבד:" + "&nbsp" + this.material + "</br>")

    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/03.jpg" />' + "</br>");

    }

}