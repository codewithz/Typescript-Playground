export class DXCPoint{
  

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

    getDifference(anotherPoint:DXCPoint){
        let diffX=this.x-anotherPoint.x;
        let diffY=this.y-anotherPoint.y;
        console.log(`Differnce X=${diffX} || y=${diffY}`);

    }
}