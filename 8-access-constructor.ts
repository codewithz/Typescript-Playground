class OurPoint{
  

    constructor(private x?:number,private y?:number){
     
    }

    draw(){
         console.log(`Point Coordinates --> x:${this.x} || y: ${this.y}`);
    }

    getDifference(anotherPoint:OurPoint){
        let diffX=this.x-anotherPoint.x;
        let diffY=this.y-anotherPoint.y;
        console.log(`Differnce X=${diffX} || y=${diffY}`);

    }
}

let point100=new OurPoint(10,20);
point100.draw();


let point200=new OurPoint(5,6);
point200.draw();

point100.getDifference(point200);


