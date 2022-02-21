class MyPoint{
    private x:number;
    private y:number;

    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }

    draw(){
         console.log(`Point Coordinates --> x:${this.x} || y: ${this.y}`);
    }

    getDifference(anotherPoint:MyPoint){
        let diffX=this.x-anotherPoint.x;
        let diffY=this.y-anotherPoint.y;
        console.log(`Differnce X=${diffX} || y=${diffY}`);

    }
}

let point10=new MyPoint(10,20);
point10.x=10;
point10.draw();


let point20=new MyPoint(5,6);
point20.draw();

point10.getDifference(point20);


