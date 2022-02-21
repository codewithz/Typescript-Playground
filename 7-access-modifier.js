var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
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
var point1 = new Point(10, 20);
point1.x = 10;
point1.draw();
var point2 = new Point(5, 6);
point2.draw();
point1.getDifference(point2);
