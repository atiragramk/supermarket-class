import { TMembers } from "../types/types";

export class Members {
  private membersEU: TMembers = [
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

  private membersNato = [
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

  get memberEU() {
    return this.membersEU;
  }

  get memberNato () {
    return this.membersNato
  }
}
