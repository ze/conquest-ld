"use strict";

class City {
    constructor(point) {
        this._point = point;

        this._major = false;
    }

    static get radius() {
        return 10;
    }

    set point(point) {
        this._point = point;
    }

    get point() {
        return this._point;
    }

    set major(major) {
        this._major = major;
    }

    get major() {
        return this._major;
    }

    get fillStyle() {
        return this._major ? "goldenrod" : "lightgray";
    }
}