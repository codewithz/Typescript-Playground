"use strict";
exports.__esModule = true;
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(noOfLikes, isSelected) {
        this.noOfLikes = noOfLikes;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.displayState = function () {
        console.log("No of Likes: ".concat(this.noOfLikes, " || Selected Status: ").concat(this.isSelected));
    };
    LikeComponent.prototype.onClick = function () {
        // if (this.isSelected) {
        //     this.isSelected = !this.isSelected;
        //     this.noOfLikes--;
        // }
        // else {
        //     this.isSelected = !this.isSelected;
        //     this.noOfLikes++;
        // }
        this.noOfLikes += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
