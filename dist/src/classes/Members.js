"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
class Members {
    constructor() {
        this.membersEU = [
            "Austria",
            "Belgium",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Hungary",
            "Ireland",
            "Italy",
            "Latvia",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Netherlands",
            "Poland",
            "Portugal",
            "Romania",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
        ];
        this.membersNato = [
            "Belgium",
            "Canada",
            "Denmark",
            "France",
            "Iceland",
            "Italy",
            "Luxembourg",
            "the Netherlands",
            "Norway",
            "Portugal",
            "the United Kingdom",
            "the United States",
        ];
    }
    get memberEU() {
        return this.membersEU;
    }
    get memberNato() {
        return this.membersNato;
    }
}
exports.Members = Members;
