var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("Point Coordinates --> x:".concat(this.x, " || y: ").concat(this.y));
    };
    Point.prototype.getDifference = function (anotherPoint) {
        var diffX = this.x - anotherPoint.x;
        var diffY = this.y - anotherPoint.y;
        console.log("Differnce X=".concat(diffX, " || y=").concat(diffY));
    };
    return Point;
}());
var point1 = new Point();
point1.x = 10;
point1.y = 20;
point1.draw();
var point2 = new Point();
point2.x = 20;
point2.y = 10;
point2.draw();
point1.getDifference(point2);
