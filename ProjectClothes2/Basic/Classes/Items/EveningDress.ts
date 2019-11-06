class EveningDress extends SkirtsAndDresses {
    material: string;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, material: string, scope: number, dressLength: number, back: boolean) {
    super(manufacturer, name, price, size, color, scope, dressLength, back);
    this.material = material;
    }

    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("היקף השמלה:" + "&nbsp" + this.scope_ + "</br>")
        document.write("אורך השמלה:" + "&nbsp" + this.length + "</br>")
        document.write("האם השמלה עם גב חשוף?" + "&nbsp" + (this.back ? "כן" : "לא") + "</br>")//תנאי מקוצר להפיכת ערך שחוזר מרנדום בוליאני לערכים 'כן' ו'לא'
        document.write("סוג הבד:" + "&nbsp" + this.material + "</br>")



    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/09.jpg" />' + "</br>");

    }

}