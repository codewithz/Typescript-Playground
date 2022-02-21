//----------------> Exposed Parameter

// let drawPoint=(x,y,a,b,c,d,e)=>{

//     //.... Some code to draw the point
//     console.log(`Point Coordinates --> x:${x} || y: ${y}`);

// }

// //drawPoint('Zartab','Nakhwa');


//----------------> Type was not checked

// let drawPoint=(point)=>{
//         //.... Some code to draw the point
//     console.log(`Point Coordinates --> x:${point.x} || y: ${point.y}`);
// }

// drawPoint({x:10,y:20});
// drawPoint({x:'Z',y:'N'});


// ----> Inline Annotations
// let drawPoint=(point:{x:number,y:number})=>{
//      console.log(`Point Coordinates --> x:${point.x} || y: ${point.y}`);
// }

// drawPoint({x:10,y:20});
// drawPoint({x:'Z',y:'N'});

//Interface 

interface Point{
    x:number,
    y:number
}

let drawPoint=(point:Point)=>{
     console.log(`Point Coordinates --> x:${point.x} || y: ${point.y}`);
}

drawPoint({x:10,y:20});
//drawPoint({x:'Z',y:'N'});

let getDifference=(pointA:Point,pointB:Point){

}