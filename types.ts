export type Products = {
    name: string;
    stock: number;
    description: string;
    price: number;
    _id:string;
  };

export type Client = {
    name: string;
    cif: string;
    _id:string;
  };

export type Invoice = {
    client: string;
    profuct: Products[];
    total: number;
    _id:string;
  };