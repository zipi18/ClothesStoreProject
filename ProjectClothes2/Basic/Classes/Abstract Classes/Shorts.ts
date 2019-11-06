abstract class Shorts extends Item1 {
    //המתשנה 'אורך המכנס' ימומש בכל מחלקה בנפרד מאחר והטווח שלו משתנה בין הפריטים//


    constructor(manufacturer: string, name: string, price: number, size: number, color: string) {
        super(manufacturer, name, price, size, color);
    }

}