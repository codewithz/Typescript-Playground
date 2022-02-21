import { DXCPoint } from './10-zpoint';

let point1000 = new DXCPoint(10, 20);

point1000.draw();


let point2000 = new DXCPoint();
point2000.x = 200;
point2000.y = 10;
point2000.draw();

point1000.getDifference(point2000);
