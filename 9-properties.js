var ZPoint = /** @class */ (function () {
    function ZPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(ZPoint.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value of X cannot be less than zero');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZPoint.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value of Y cannot be less than zero');
            }
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    ZPoint.prototype.draw = function () {
        console.log("Point Coordinates --> x:".concat(this._x, " || y: ").concat(this._y));
    };
    ZPoint.prototype.getDifference = function (anotherPoint) {
        var diffX = this.x - anotherPoint.x;
        var diffY = this.y - anotherPoint.y;
        console.log("Differnce X=".concat(diffX, " || y=").concat(diffY));
    };
    return ZPoint;
}());
var point1000 = new ZPoint(10, 20);
point1000.draw();
var point2000 = new ZPoint();
point2000.x = -200;
point2000.y = 10;
point2000.draw();
point1000.getDifference(point2000);
