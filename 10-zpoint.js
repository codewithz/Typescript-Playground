"use strict";
exports.__esModule = true;
exports.DXCPoint = void 0;
var DXCPoint = /** @class */ (function () {
    function DXCPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(DXCPoint.prototype, "x", {
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
    Object.defineProperty(DXCPoint.prototype, "y", {
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
    DXCPoint.prototype.draw = function () {
        console.log("Point Coordinates --> x:".concat(this._x, " || y: ").concat(this._y));
    };
    DXCPoint.prototype.getDifference = function (anotherPoint) {
        var diffX = this.x - anotherPoint.x;
        var diffY = this.y - anotherPoint.y;
        console.log("Differnce X=".concat(diffX, " || y=").concat(diffY));
    };
    return DXCPoint;
}());
exports.DXCPoint = DXCPoint;
