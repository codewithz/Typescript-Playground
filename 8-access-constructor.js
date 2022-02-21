var OurPoint = /** @class */ (function () {
    function OurPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    OurPoint.prototype.draw = function () {
        console.log("Point Coordinates --> x:".concat(this.x, " || y: ").concat(this.y));
    };
    OurPoint.prototype.getDifference = function (anotherPoint) {
        var diffX = this.x - anotherPoint.x;
        var diffY = this.y - anotherPoint.y;
        console.log("Differnce X=".concat(diffX, " || y=").concat(diffY));
    };
    return OurPoint;
}());
var point100 = new OurPoint(10, 20);
point100.draw();
var point200 = new OurPoint(5, 6);
point200.draw();
point100.getDifference(point200);
