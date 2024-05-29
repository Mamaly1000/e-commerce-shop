export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
  storeId: string;
  categoryId: string;
  sizeId: string;
  colorId: string;
}
export interface store_with_analytic {
  name: string;
  description: string;
  background_Image: string;
  logo: string; 
  total_revenue: number;
  total_sell_products: number;
  id: string; 
}

export interface Store {
  name: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  poster: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}
export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
