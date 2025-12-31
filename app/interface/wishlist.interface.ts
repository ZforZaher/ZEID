export interface WishlistItem {
  _id: string;
  id: string;
  imageCover: string;
  title: string;
  category: {
    name: string;
  };
  brand?: {
    name: string;
  };
  price: number;
  priceAfterDiscount?: number;
}

export interface WishlistResponse {
  status: string;
  count: number;
  data: WishlistItem[];
}