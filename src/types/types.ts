export type TReforms = {
  name: string;
  priority: string;
  status: string;
}

export type TMembers = string[];

export interface IPresident {
  name: string;
  country: string;
}

export interface IAlliance {
  name: string;
  header: IPresident;
  type: string;
  members: TMembers;
  requirements: TReforms[];
}

export interface ICountry {
  name: string;
  president: IPresident;
  alliances: string;
  reforms: TReforms[];
  situation: string;
}
