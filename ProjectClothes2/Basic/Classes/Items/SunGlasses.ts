class SunGlasses extends Glasses {
    colorGlassGlasses: string;


    constructor(manufacturer: string, name: string, price: number, colorFrameGlasses: string, colorGlassGlasses: string) {
        super(manufacturer, name, price, colorFrameGlasses);
        this.colorGlassGlasses = colorGlassGlasses;
    }


    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע המסגרת:" + "&nbsp" + this.colorFrameGlasses + "</br>")
        document.write("צבע הזכוכית:" + "&nbsp" + this.colorGlassGlasses + "</br>")


    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/19.jpg" />' + "</br>");

    }

}