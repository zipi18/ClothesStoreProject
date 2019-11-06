﻿class T_Shirt extends Shirt {
    text: string;


    constructor(manufacturer: string, name: string, size: number, price: number, color: string, sleevesLength: number, text: string) {
        super(manufacturer, name, price, size, color, sleevesLength);
        this.text = text;
    }


    //מימוש פונקציית הבסיס: הדפסת פרטי הפריט
    displayDetails(): void {
        document.write("שם יצרן:" + "&nbsp" + this.manufacturer + "</br>")
        document.write("דגם:" + "&nbsp" + this.name + "</br>")
        document.write("מידה:" + "&nbsp" + this.sizeOfItem1 + "</br>")
        document.write("מחיר:" + "&nbsp" + this.priceOfItem1 + "</br>")
        document.write("צבע:" + "&nbsp" + this.color + "</br>")
        document.write("אורך השרוול:" + "&nbsp" + this.length + "</br>")
        document.write("הכיתוב על החולצה:" + "&nbsp" + this.text + "</br>")

    }

    //מימוש פונקציית הבסיס: הדפסת תמונת הפריט
    displayImage(): void {
        document.write('<img src="../image/01.jpg" />' + "</br>");

    }  

}