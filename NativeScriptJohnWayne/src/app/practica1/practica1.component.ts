import { Component } from '@angular/core';

@Component({
    selector: 'selector-name',
    templateUrl: "./practica1.component.html",
    styleUrls: ["./practica1.component.css"]
})

export class Practica1Component {
    topblock = "topblock";
    leftblock = "leftblock";
    rightblock = "rightblock";
    bottomblock = "bottomblock";

    optionOne() {
        this.topblock = "topblock";
    }
    // make change the color in color blue
    optionTwo() {
        this.topblock = "rightblock";
    }

    optionThree() {

    }

    optionFour() {

    }

    optionFive() {

    }

    optionSix() {

    }
}