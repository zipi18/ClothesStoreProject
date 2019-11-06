class Dimensions {
    private lengthB: number;
    private widthB: number;
    private heightB: number;


    constructor(lengthB: number, widthB: number, heightB: number) {
        this.lengthBelt = lengthB;
        this.widthBelt = widthB;
        this.heightBelt = heightB;
    }


    //בדיקה שהאורך עומד בטווח, והחזרת הערך למשתנה
    set lengthBelt(lengthB: number) {
        if (lengthB >= 74 && lengthB <= 100) {
            this.lengthB = lengthB;
        }
        else {
            throw Error("הוזן ערך לא תקין. אורך החגורה חייב להיות בטווח של 74-100");
        }
    }
    get lengthBelt(): number {
        return this.lengthB;
    }

    //בדיקה שהרוחב עומד בטווח, והחזרת הערך למשתנה
    set widthBelt(widthB: number) {
        if (widthB >= 1 && widthB <= 5) {
            this.widthB = widthB;
        }
        else {
            throw Error("הוזן ערך לא תקין. רוחב החגורה חייב להיות בטווח של 1-5");
        }
    }
    get widthBelt(): number {
        return this.widthB;
    }

    //בדיקה שהגובה עומד בטווח, והחזרת הערך למשתנה
    set heightBelt(heightB: number) {
        if (heightB >= 1 && heightB <= 5) {
            this.heightB = heightB;
        }
        else {
            throw Error("הוזן ערך לא תקין. גובה החגורה חייב להיות בטווח של 1-5");
        }
    }
    get heightBelt(): number {
        return this.heightB;
    }

}