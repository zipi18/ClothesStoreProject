class Generator {

    //פונקציה המחזירה אובייקט של פריט רנדומלי מבין 20 פריטים
    getRandomItem() {
        var x: number = this.randomMinToMax(1, 20);
        switch (x) {
            case 1: {
                var t_Shirt = new T_Shirt(this.getManufacturer(),
                    "חולצת T-Shirt", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(75, 97), this.getTextOnShirt());

                return t_Shirt;
            }
            case 2: {
                var buttonedShirt = new ButtonedShirt(this.getManufacturer(),
                    "חולצה מכופתרת", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(75, 97), this.randomMinToMax(5, 7));

                return buttonedShirt;

            }
            case 3: {
                var womenShirt = new WomenShirt(this.getManufacturer(),
                    "חולצת נשים", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(75, 97), this.getMaterial());
                return womenShirt;

            }
            case 4: {
                var jins = new Jins(this.getManufacturer(),
                    "מכנסי ג'ינס", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(80, 85), this.randomBoolean());
                return jins;
            }
            case 5: {
                var fabricPants = new FabricPants(this.getManufacturer(),
                    "מכנסי בד", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(80, 85), this.randomMinToMax(2, 4));
                return fabricPants;
            }
            case 6: {
                var shortShorts = new ShortShorts(this.getManufacturer(),
                    "מכנסיים קצרים", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(40, 60), this.getMaterial());
                return shortShorts;
            }
            case 7: {
                var skirt = new Skirt(this.getManufacturer(),
                    "חצאית", this.randomMinToMax(36,48), this.randomMinToMax(50, 500),
                    this.getColor(), this.getTypeSkirt(), this.randomMinToMax(56, 86), );
                return skirt;
            }
            case 8: {
                var dress = new Dress(this.getManufacturer(),
                    "שמלה", this.randomMinToMax(36,48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(56, 86), this.randomMinToMax(84, 150), this.randomBoolean());
                return dress;
            }
            case 9: {
                var eveningDress = new EveningDress(this.getManufacturer(),
                    "שמלת ערב", this.randomMinToMax(36,48), this.randomMinToMax(50, 500),
                    this.getColor(), this.getMaterial(), this.randomMinToMax(56, 86), this.randomMinToMax(84, 150), this.randomBoolean());
                return eveningDress;
            }
            case 10: {
                var elegantShoes = new ElegantShoes(this.getManufacturer(),
                    "נעליים אלגנטיות", this.randomMinToMax(36,48), this.randomMinToMax(50, 500),
                    this.getColor(), this.getMaterialShoes(), this.getCreationCountry(), this.randomBoolean());
                return elegantShoes;
            }
            case 11: {
                var sportShoes = new SportShoes(this.Date(new Date(2017, 1, 1), new Date()), this.getManufacturer(),
                    "נעלי ספורט", this.randomMinToMax(36,48), this.randomMinToMax(50, 500),
                    this.getColor(), this.getCreationCountry(), this.randomBoolean());
                return sportShoes;
            }
            case 12: {
                var comfortShoes = new ComfortShoes(this.getManufacturer(),
                    "נעלי נוחות", this.randomMinToMax(36,48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomBoolean(), this.getCreationCountry(), this.randomBoolean());
                return comfortShoes;
            }
            case 13: {
                var hilShoes = new HilShoes(this.getManufacturer(),
                    "נעלי עקב", this.randomMinToMax(36,42), this.randomMinToMax(50, 500),
                    this.getColor(), this.getHil(), this.getCreationCountry());
                return hilShoes;
            }
            case 14: {
                var jacet = new Jacet(this.getManufacturer(),
                    "ג'קט", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(1, 10), this.randomMinToMax(2, 3));
                return jacet;
            }
            case 15: {
                var coats = new Coats(this.getManufacturer(),
                    "מעיל", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(1, 10), this.randomBoolean());
                return coats;

            }
            case 16: {
                var cap = new Cap(this.getManufacturer(),
                    "כובע קסקט", this.randomMinToMax(36, 48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(50, 65), this.randomBoolean());
                return cap;

            }
            case 17: {
                var migbaat = new Migbaat(this.getManufacturer(),
                    "מגבעת", this.randomMinToMax(36,48), this.randomMinToMax(50, 500),
                    this.getColor(), this.randomMinToMax(50, 65), this.randomMinToMax(10, 20));
                return migbaat;

            }
            case 18: {
            var belt = new Belt(this.getManufacturer(),
                "חגורה", this.randomMinToMax(50, 500), this.getColorBelt(),
                    this.getColorBuckle_Glasses(), this.getMaterialBelt());
                
            return belt;
        

            }
            case 19: {
                var sunGlasses = new SunGlasses(this.getCeareGlasses(),
                    "משקפי שמש", this.randomMinToMax(50, 500), this.getColorBuckle_Glasses(), this.getColorBelt());
                return sunGlasses;

            }
            case 20: {
                var readGlasses = new ReadGlasses(this.getCeareGlasses(),
                    "משקפי קריאה", this.randomMinToMax(50, 500), this.getColorBuckle_Glasses(),this.randomMinToMax(2, 6));
                return readGlasses;

            }
        }
    }

    // פונקציה המחזירה מספר רנדומלי בין 2 ערכים מתקבלים
    private randomMinToMax(min: number, max: number): number {
        var x: number;
        x = Math.random();
        x = x * (max - min + 1) + min;
        x = Math.floor(x);
        return x;
    }

    //פונקציה המחזירה ערך בוליאני באופן רנדומלי
    private randomBoolean(): boolean {
        var x: number;
        x = Math.random();
        x = (x * 2) + 1;
        x = Math.floor(x);
        if (x == 1) {
            return true;
        }
        return false;
    }

    //פונקציה המחזירה את שם היצרן באופן רנדומלי
    private getManufacturer(): string {

        var x: number = this.randomMinToMax(1, 9);
        var a: string;
        switch (x) {
            case 1: {
                a = "ZARA";
                return a;
            }
            case 2: {
                a = "MANGO";
                return a;
            }
            case 3: {
                a = "CASTRO";
                return a;
            }
            case 4: {
                a = "RENUAR";
                return a;
            }
            case 5: {
                a = "H&M";
                return a;
            }
            case 6: {
                a = "PULL&BEAR";
                return a;
            }
            case 7: {
                a = "BERSHKA";
                return a;
            }
            case 8: {
                a = "TOPSHOP";
                return a;
            }
            case 9: {
                a = "TWENTYFORSEVEN";
                return a;
            }
        }

    }

    //פונקציה המחזירה את צבע הפריט באופן רנדומלי
    private getColor(): string {

        var x: number = this.randomMinToMax(1, 9);
        var a: string;
        switch (x) {
            case 1: {
                a = "אדום";
                return a;
            }
            case 2: {
                a = "כחול";
                return a;
            }
            case 3: {
                a = "ירוק";
                return a;
            }
            case 4: {
                a = "צהוב";
                return a;
            }
            case 5: {
                a = "שחור";
                return a;
            }
            case 6: {
                a = "לבן";
                return a;
            }
            case 7: {
                a = "חום";
                return a;
            }
            case 8: {
                a = "סגול";
                return a;
            }
            case 9: {
                a = "כתום";
                return a;
            }
        }

    }

    //פונקציה המחזירה באופן רנדומלי את הכיתוב על החולצה. במידה ולא, הפונקציה תחזיר
    //'null' 
    private getTextOnShirt(): string {
        var x: number = this.randomMinToMax(1, 3);
        var a: string;
        switch (x) {
        case 1: {
                a = "(:SMILE";
        return a;
        }
         case 2: {
        a = "HAPPY";
        return a;
         }
         case 3: {
                a = "לשון הרע לא מדבר אלי";
                return a;
            }
            case 4: {
                a = null;
                return a;
            }
           
        }
    }

    //פונקציה המחזירה את יצרן המשקפיים באופן רנדומלי
    private getCeareGlasses(): string {
        var x: number = this.randomMinToMax(1, 3);
        var a: string;
        switch (x) {
            case 1: {
                a = "EROCA";
                return a;
            }
            case 2: {
                a = "VERSACHE";
                return a;
            }
            case 3: {
                a = "DIOR";
                return a;
            }

        }
    }

    //פונקציה המחזירה את סוג הבד באופן רנדומלי
    private getMaterial(): string {
        var x: number = this.randomMinToMax(1, 3);
        var a: string;
        switch (x) {
            case 1: {
                a = "ויסקוזה";
                return a;
            }
            case 2: {
                a = "פוליאסטר";
                return a;
            }
            case 3: {
                a = "כותנה";
                return a;
            }

        }
    }

    //פונקציה המחזירה את סוג חומר הנעל באופן רנדומלי
    private getMaterialShoes(): string {
        var x: number = this.randomMinToMax(1, 3);
        var a: string;
        switch (x) {
            case 1: {
                a = "בד";
                return a;
            }
            case 2: {
                a = "עור";
                return a;
            }
            case 3: {
                a = "זמש";
                return a;
            }

        }
    }

    //פונקציה המחזירה את סוג החצאית באופן רנדומלי
    private getTypeSkirt(): string {
        var x: number = this.randomMinToMax(1, 2);
        var a: string;
        switch (x) {
            case 1: {
                a = "חצאית קצרה";
                return a;
            }
            case 2: {
                a = "חצאית ארוכה";
                return a;
            }
        }
    }

    //פונקציה המחזירה את ארץ יצור הנעל באופן רנדומלי
    private getCreationCountry(): string {
        var x: number = this.randomMinToMax(1, 4);
        var a: string;
        switch (x) {
            case 1: {
                a = "סין";
                return a;
            }
            case 2: {
                a = "איטליה";
                return a;
            }
            case 3: {
                a = "ויאטנם";
                return a;
            }
            case 4: {
                a = "אינדונזיה";
                return a;
            }
        }
    }

    //פונקציה המחזירה את סוג העקב באופן רנדומלי
    private getHil(): string {
        var x: number = this.randomMinToMax(1, 3);
        var a: string;
        switch (x) {
            case 1: {
                a = "עקב נמוך";
                return a;
            }
            case 2: {
                a = "עקב בינוני";
                return a;
            }
            case 3: {
                a = "עקב גבוה";
                return a;
            }

        }
    }

    //פונקציה המחזירה את צבע החגורה באופן רנדומלי
    private getColorBelt(): string {
        var x: number = this.randomMinToMax(1, 4);
        var a: string;
        switch (x) {
            case 1: {
                a = "שחור";
                return a;
            }
            case 2: {
                a = "כחול";
                return a;
            }
            case 3: {
                a = "חום";
                return a;
            }
            case 4: {
                a = "אפור";
                return a;
            }
        }
    }

    //פונקציה המחזירה את חומר האבזם באופן רנדומלי
    private getMaterialBelt(): string {
        var x: number = this.randomMinToMax(1, 4);
        var a: string;
        switch (x) {
            case 1: {
                a = "מתכת";
                return a;
            }
            case 2: {
                a = "עור";
                return a;
            }
            case 3: {
                a = "בד";
                return a;
            }
            case 4: {
                a = "פלסטיק";
                return a;
            }
        }
    }

    //פונקציה המחזירה את צבע האבזם באופן רנדומלי
    private getColorBuckle_Glasses(): string {
        var x: number = this.randomMinToMax(1, 3);
        var a: string;
        switch (x) {
            case 1: {
                a = "כסף";
                return a;
            }
            case 2: {
                a = "זהב";
                return a;
            }
            case 3: {
                a = "נחושת";
                return a;
            }

        }
    }

    //פונקציה המקבלת תאריך התחלתי + תאריך נוכחי, ומחזירה תאריך רנדומלי בטווח זה 
    private Date(start, end): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

}
