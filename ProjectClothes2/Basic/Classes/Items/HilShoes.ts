class HilShoes extends Shoes {
    typeOgHil: string;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, typeOgHil: string, creationCountry: string) {
        super(manufacturer, name, price, size, color, creationCountry);
        this.typeOgHil = typeOgHil;
    }


    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("ארץ ייצור:" + "&nbsp" + this.creationCountry + "</br>")
        document.write("סוג העקב:" + "&nbsp" + this.typeOgHil + "</br>")


    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/13.jpg" />' + "</br>");

    }

}