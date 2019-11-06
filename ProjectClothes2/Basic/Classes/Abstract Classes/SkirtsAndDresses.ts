abstract class SkirtsAndDresses extends Item1 {
    private scope: number;
    protected back: boolean;
    private dressLength: number;


    //הבנאי יקבל את ערכים 'אורך השמלה' ו'האם השמלה עם גב חשוף' כפרמטרים אופציונליים מאחר והם לא ממומשים בכל המחלקות היורשות
    constructor(manufacturer: string, name: string, price: number, size: number, color: string, scope: number, dressLength?: number, back?: boolean ) {
        super(manufacturer, name, price, size, color);
        this.scope_ = scope;
        this.back = back;
        //במידה והערך אורך השמלה= 'לא נמצא', הבנאי לא יאתחל אותו
        if (dressLength != undefined)
        this.length = dressLength;
    }


    //בדיקה שההיקף עומד בטווח, והחזרת הערך למשתנה
    protected set scope_(scope: number) {
        if (scope >= 56 && scope <= 86) {
            this.scope = scope;
        }
        else {
            throw Error("הוזן ערך לא תקין. ההיקף חייב להיות בטווח של 56-86");
        }
    }
    protected get scope_(): number {
        return this.scope;
    }

    //בדיקה שאורך השמלה עומד בטווח, והחזרת הערך למשתנה
    protected set length(length: number) {
        if (length >= 84 && length <= 150) {
            this.dressLength = length;
        }
        else {
            throw Error("הוזן ערך לא תקין. אורך השמלה חייב להיות בטווח של 84-150");
        }
    }
    protected get length(): number {
        return this.dressLength;
    }

}