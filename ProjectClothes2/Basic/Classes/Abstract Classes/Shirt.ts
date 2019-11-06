abstract class Shirt extends Item1 {
    private sleevesLength: number;


    constructor(manufacturer: string, name: string, price: number, size: number, color: string, sleevesLength: number) {
        super(manufacturer, name, price, size, color);
        this.length = sleevesLength;
    }


    //בדיקה שאורך השרוולים עומד בטווח, והחזרת הערך למשתנה
    protected set length(l_sleeves: number) {
        if (l_sleeves >= 75 && l_sleeves <= 97) {
            this.sleevesLength = l_sleeves;
        }
        else {
            throw Error("הוזן ערך לא תקין. אורך השרוול חייב להיות בטווח של 75-97");
        }
    }
    protected get length(): number {
        return this.sleevesLength;
    }

}

    //פונקציה המחזירה את יצרן המשקפיים באופן רנדומלי
