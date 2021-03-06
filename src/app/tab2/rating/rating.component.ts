import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
	selector: "app-rating",
	templateUrl: "./rating.component.html",
	styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
	@Input() rating: number;
	@Input() message: string;
	@Input() note: string;

	@Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
	@Output() noteChange: EventEmitter<string> = new EventEmitter<string>();
	@Output() messageChange: EventEmitter<string> = new EventEmitter<string>();

	constructor() {}

	ngOnInit() {}

	rate(index: number) {
		// function used to change the value of our rating
		// triggered when user, clicks a star to change the rating
		this.rating = index;
		this.ratingChange.emit(this.rating);
	}

	isAboveRating(index: number): boolean {
		// returns whether or not the selected index is above ,the current rating
		// function is called from the getColor function.
		return index > this.rating;
	}

	getColor(index: number) {
		/* function to return the color of a star based on what
       index it is. All stars greater than the index are assigned
       a grey color , while those equal or less than the rating are
       assigned a color depending on the rating. Using the following criteria:

            1-2 stars: red
            3 stars  : yellow
            4-5 stars: green
      */

		if (this.isAboveRating(index)) {
			return COLORS.GREY;
		}
		switch (this.rating) {
			case 1:
				return COLORS.RED;
			case 2:
				return COLORS.ORANGE;
			case 3:
				return COLORS.YELLOW;
			case 4:
				return COLORS.GREEN;
			case 5:
				return COLORS.BLUE;
			default:
				return COLORS.GREY;
		}
	}
	onMessageChange(ev) {
    this.messageChange.emit(ev);
		// this.noteChange.emit(ev);

	}
	// onNoteChange(ev) {
	// 	this.noteChange.emit(ev);
  //   // this.messageChange.emit(ev);
	// }
}

enum COLORS {
	GREY = "#E0E0E0",
	GREEN = "#76FF03",
	YELLOW = "#FFCA28",
	RED = "#DD2C00",
	BLUE = "#0060ff",
	ORANGE = " #ff8000",
}
