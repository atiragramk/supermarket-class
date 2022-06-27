import { ICountry, TReforms, IPresident } from "../types/types";

import { Alliance } from "./Alliance";

export class Country implements ICountry {
  constructor(
    public name: string,
    public president: IPresident,
    public alliances: string,
    public reforms: TReforms[],
    public situation: string,
  ) {}

  public receiveRequirements(alliance: Alliance) {
    this.reforms = alliance.giveRequirements();
  }

  public async makeApplication() {
    return await this.makeReforms();
    
  }

  public receiveStatus(status: string) {
    this.alliances = status;
    console.log(status)
  }

  public makeReforms() {
    const promise = new Promise<TReforms[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.reforms.reduce((updated: TReforms[], reform) => {
            reform.status = "done";
            updated.push(reform);
            return updated;
          }, [])
        );
      }, 20000);
    });
    promise.then((value) => {
      this.reforms = value;
    });
    return promise;
  }

  public checkNeighbors(neighbor: Country) {
    if (neighbor.name === 'russia') {
      this.situation = 'war';
    }
  }
}
