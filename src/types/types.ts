export interface IPerson {
  name: string;
}

export enum Producer {
  Chumak = "Chumak",
  Roshen = "Roshen",
  Hlobino = "Hlobino",
  Premia = "Premia",
  Multico = "Multico",
  Hrona = "Hrona",
  Halka = "Halka",
}

export type TProduct = {
  name: string;
  price: number;
  producer: Producer;
};
