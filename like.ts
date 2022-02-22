export class LikeComponent {



    constructor(private noOfLikes: number, private isSelected: boolean) {

    }

    displayState() {
        console.log(`No of Likes: ${this.noOfLikes} || Selected Status: ${this.isSelected}`);
    }

    onClick() {
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
    }



}