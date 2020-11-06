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
    imageView = "~/assets/android.png";

    optionOne() {
        this.topblock = "topblock";
    }

    optionTwo() {
        this.topblock = "colorRed";
    }

    optionThree() {
        this.topblock = "colorBlue";
    }

    optionFour() {
        this.imageView = "~/assets/android.png";
    }

    optionFifth() {
        this.imageView = "~/assets/angular.png";
    }

    optionSix() {
        this.imageView = "~/assets/flutter.png"
    }
}