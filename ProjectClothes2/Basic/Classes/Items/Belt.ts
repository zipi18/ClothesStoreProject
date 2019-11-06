class Belt extends Item1 {
    colorBelt: string;
    colorBuckle: string;
    materialBelt: string;
    sizeB: Dimensions;//הכלה של מחלקת מידות חגורה

    
    constructor(manufacturer: string, name: string, price: number, colorBelt: string, colorBuckle: string, materialBelt: string) {
        super(manufacturer, name, price);
        this.materialBelt = materialBelt;
        this.colorBelt = colorBelt;
        this.colorBuckle = colorBuckle;
        this.sizeB = new Dimensions(this.randomMinToMax(74, 100), this.randomMinToMax(1, 5), this.randomMinToMax(1, 5));//הפעלת מחלקת מידות חגורה

    }


    // פונקציה המחזירה מספר רנדומלי בין 2 ערכים מתקבלים לצורך מימוש מידות החגורה
    randomMinToMax(min, max): number {
        var x: number;
        x = Math.random();
        x = x * (max - min + 1) + min;
        x = Math.floor(x);
        return x;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע החגורה:" + "&nbsp" + this.colorBelt + "</br>")
        document.write("צבע האבזם:" + "&nbsp" + this.colorBuckle + "</br>")
        document.write("חומר האבזם:" + "&nbsp" + this.materialBelt + "</br>")
        document.write("מידות החגורה:" + "&nbsp" + " אורך:" + "&nbsp" + this.sizeB.lengthBelt + " ס''מ," + "&nbsp" + " רוחב:" + "&nbsp" + this.sizeB.widthBelt  + " מ''מ," + "&nbsp" + " גובה:" + "&nbsp" + this.sizeB.heightBelt + " ס''מ" +  "</br>")


    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/18.jpg" />' + "</br>");

    }

}