export interface IProduct {
  id: number,
  name: string,
  brand: {
    id: number;
    name: string
  },
  position: number,
  buyingPrice: number,
  category: {
    id: number;
    name: string
  },
  gender: {
    id: number;
    name: string
  },
  currency?: {
    id: number;
    name: string
  },
  color: string,
  reference: number | string,
  price: number,
  pictures: {
    id: number,
    mobile: string,
    desktop: string,
    primary: number
  }[] | [],
  sizes: {
    id: number,
    name: string,
    quantity: number
  }[] | [],
  linked_products: {
    product: {
      color: string
    }
  }[] | [],
  detail: IDetail | undefined
}

export interface IUser {
	token?: string;
	id: number;
	verified?: boolean;
	firstname: string;
	lastname: string;
	telephone: string;
	role: string;
}

export interface IAddress {
	id?: number | undefined;
	street: string;
	number: string;
	quarter: string;
	township: string;
	town: string;
	reference?: string;
}

export interface IOrder {
	id?: number | undefined;
	deliveryType: string;
}

export interface IRole {
	id: number;
	name: string;
}

export interface IListItem {
	value: number;
	text: string;
  id: number,
  name: string,
}

export interface IDetail {
  id?: number | undefined,
  products_id: string,
  couleur: string,
  motif?: string | null,
  saison: string,
  description: string,
  type_de_col?: string | null,
  type_des_manches?: string | null,
  transparent: string,
  tissu: string,
  composition: string,
  instructions?: string | null,
}
