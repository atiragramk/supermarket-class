import { IAlliance, TMembers, IPresident, TReforms } from "../types/types";
import { Country } from "./Country";

export class Alliance implements IAlliance {
  constructor(
    public name: string,
    public header: IPresident,
    public type: string,
    public members: TMembers,
    public requirements: TReforms[]
  ) {}

  public giveRequirements() {
    return this.requirements;
  }

  public async acceptance(country: Country) {

    if (country.situation === "war") {
      this.giveMemberStatus(country);
      return;
    }

    const criteria = (await country.makeApplication()).every(
      (reform) => reform.status === "done"
    );

    if (criteria) {
      this.giveMemberStatus(country);
    } else {
      throw new Error(
        "You are not able to get member status of our alliance, you should make all requirements done"
      );
    }
  }

  protected giveMemberStatus(country: Country) {
    if (this.name == "NATO") {
      throw new Error("We are accepted you soon...");
    }
    country.receiveStatus(this.name);
    this.members.push(country.name);
  }
}
