abstract class Glasses extends Item1 {
    protected colorFrameGlasses: string;


    constructor(manufacturer: string, name: string, price: number, colorFrameGlasses: string) {
        super(manufacturer, name, price);
        this.colorFrameGlasses = colorFrameGlasses;

    }

}