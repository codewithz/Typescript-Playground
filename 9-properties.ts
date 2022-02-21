class ZPoint{
  

    constructor(private _x?:number,private _y?:number){
     
    }

    set x(value){
        if(value<0){
            throw new Error('Value of X cannot be less than zero')
        }
        this._x=value;
    }

    get x(){
        return this._x;
    }

    set y(value){
        if(value<0){
            throw new Error('Value of Y cannot be less than zero')
        }
        this._y=value;
    }

    get y(){
        return this._y;
    }

    draw(){
         console.log(`Point Coordinates --> x:${this._x} || y: ${this._y}`);
    }

    getDifference(anotherPoint:ZPoint){
        let diffX=this.x-anotherPoint.x;
        let diffY=this.y-anotherPoint.y;
        console.log(`Differnce X=${diffX} || y=${diffY}`);

    }
}

let point1000=new ZPoint(10,20);

point1000.draw();


let point2000=new ZPoint();
point2000.x=-200;
point2000.y=10;
point2000.draw();

point1000.getDifference(point2000);


