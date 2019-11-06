abstract class Shoes extends Item1 {
    protected creationCountry: string;
    protected laces: boolean;


    //הבנאי יקבל את הערך 'האם יש שרוכים' כפרמטר אופציונלי מאחר והוא לא ממומש בכל המחלקות היורשות
    constructor(manufacturer: string, name: string, price: number, size: number, color: string, creationCountry: string, laces?: boolean) {
        super(manufacturer, name, price, size, color);
        this.creationCountry = creationCountry;
        this.laces = laces;

    }
    
}