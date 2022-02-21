class Point{
    x:number;
    y:number;

    draw(){
         console.log(`Point Coordinates --> x:${this.x} || y: ${this.y}`);
    }

    getDifference(anotherPoint:Point){
        let diffX=this.x-anotherPoint.x;
        let diffY=this.y-anotherPoint.y;
        console.log(`Differnce X=${diffX} || y=${diffY}`);

    }
}

let point1=new Point();
point1.x=10;
point1.y=20;
point1.draw();


let point2=new Point();
point2.x=20;
point2.y=10;
point2.draw();

point1.getDifference(point2);


