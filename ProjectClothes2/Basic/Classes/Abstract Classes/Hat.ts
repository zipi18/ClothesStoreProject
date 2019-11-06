abstract class Hat extends Item1 {
    private diameter: number;


    constructor(manufacturer: string, name: string, price: number, size: number, color: string, diameter: number) {
        super(manufacturer, name, price, size, color);
        this.diameterHat = diameter;

    }


    //בדיקה שהקוטר עומד בטווח, והחזרת הערך למשתנה
    protected set diameterHat(diameter: number) {
        if (diameter >= 50 && diameter <= 65) {
            this.diameter = diameter;
        }
        else {
            throw Error("הוזן ערך לא תקין. הקוטר חייב להיות בטווח של 50-65");
        }
    }
    protected get diameterHat(): number {
        return this.diameter;
    }

}