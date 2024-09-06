export type CardProps = {
    product?: {
      id?: number;
      title?: string;
      price?: number;
      description?: string;
      image?: string;
      rating?: {
        rate?: number;
        count?: number;
      };
    };
};

export type Products = {
  product: CardProps;
};

export type Card ={
  product: Array<CardProps>;
}


