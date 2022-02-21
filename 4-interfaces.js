// let drawPoint=(x,y,a,b,c,d,e)=>{
//     //.... Some code to draw the point
//     console.log(`Point Coordinates --> x:${x} || y: ${y}`);
// }
// //drawPoint('Zartab','Nakhwa');
var drawPoint = function (point) {
    //.... Some code to draw the point
    console.log("Point Coordinates --> x:".concat(point.x, " || y: ").concat(point.y));
};
drawPoint({ x: 10, y: 20 });
drawPoint({ x: 'Z', y: 'N' });
