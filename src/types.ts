export type CategoryType = {
  id: string;
  name: string;
};

export type ProductType = {
  productID: string;
  image: string;
  name: string;
  price: number;
};

export type CartProductType = ProductType & { quantity: number };
