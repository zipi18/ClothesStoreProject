abstract class JacetAndCoats extends Item1 {
    private thickness: number;


    constructor(manufacturer: string, name: string, price: number, size: number, color: string, thickness: number) {
        super(manufacturer, name, price, size, color);
        this.thicknessMaterial = thickness;

    }


    //בדיקה שעובי הבד עומד בטווח, והחזרת הערך למשתנה
    protected set thicknessMaterial(thickness: number) {
        if (thickness >= 1 && thickness <= 10) {
            this.thickness = thickness;
        }
        else {
            throw Error("הוזן ערך לא תקין. עובי הבד חייב להיות בטווח של 1-10");
        }
    }
    protected get thicknessMaterial(): number {
        return this.thickness;
    }

}