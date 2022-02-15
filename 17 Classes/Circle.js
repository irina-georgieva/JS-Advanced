class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    };

    get area(){
        return this.radius **2 * Math.PI;
    }

    set diameter(value){
        this.radius = value /2;
    }
}

const c = new Circle(4);

console.log(c);