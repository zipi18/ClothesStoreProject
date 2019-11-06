abstract class Item1 {
    protected manufacturer: string;
    protected name: string;
    private price: number;
    private size: number;
    protected color: string;


    //הבנאי יקבל את ערכים 'מידה' ו'צבע' כפרמטרים אופציונליים מאחר והם לא ממומשים בכל המחלקות היורשות
    constructor(manufacturer: string, name: string, price: number, size?: number, color?: string) {
        this.manufacturer = manufacturer;
        this.name = name;
        this.priceOfItem1 = price;
        //במידה והערך מידה= 'לא נמצא', הבנאי לא יאתחל אותו
        if (size != undefined)
            this.sizeOfItem1 = size;
        this.color = color;
    }


    //בדיקה שהמחיר עומד בטווח, והחזרת הערך למשתנה
    protected set priceOfItem1(price: number) {
        if (price >= 50 && price <= 500) {
            price = parseInt(price.toString());
            this.price = price;
        }
        else {
            throw Error("הוזן ערך לא תקין. מחיר חייב להיות בטווח של 50-500 ");
        }
    }
    protected get priceOfItem1(): number {
        return this.price;
    }

    //בדיקה שהמידה עומדת בטווח, והחזרת הערך למשתנה
    protected set sizeOfItem1(size: number) {
        
         if (size >= 36 && size <= 48) {
            size = parseInt(size.toString());
            this.size = size;
        }
        else {
            throw Error(" 36-48 הוזן ערך לא תקין. המידה חייבת להיות בטווח של ");
        }
    }
    protected get sizeOfItem1(): number {
        return this.size;
    }

    //פונקציה אבסטרקטית להצגת את פרטי הפריט. מימוש יבוצע במחלקת כל פריט
    abstract displayDetails();

   //פונקציה אבסטרקטית להצגת את תמונת הפריט. מימוש יבוצע במחלקת כל פריט
    abstract displayImage();

    //פונקציה המחזירה מחיר ללא מע"מ
    getPriceWithoutVat(): number {
        var noMaam: number = 17;
        noMaam = parseInt((this.priceOfItem1 - ((this.priceOfItem1 * noMaam) / 100)).toString());
        return noMaam;
    }
    
    //פונקציה המחזירה את שם היצרן + הדגם
    get brand(): string {
        var x: string;
        x = this.manufacturer + "&nbsp" + this.name;
        return x;
    }

}