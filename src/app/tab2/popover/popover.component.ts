import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-popover",
	templateUrl: "./popover.component.html",
	styleUrls: ["./popover.component.scss"],
})
export class PopoverComponent implements OnInit {
	ratingValue = 0;
  messageValue = "";
  noteValue = "";

	constructor() {}

	ngOnInit() {}

	collectMessage(ev) {
		console.log({ ev });
		this.messageValue = ev;

	}
}
