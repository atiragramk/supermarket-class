import { IPresident } from "../types/types";

export class President implements IPresident {
  
  constructor(public name: string, public country: string) {}
}
