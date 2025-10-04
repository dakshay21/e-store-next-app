// Product Types
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string; // Decimal as string
  image_url?: string;
  stock: number;
  is_in_stock: boolean;
  created_at: string; // ISO datetime
  updated_at: string; // ISO datetime
}

export interface ProductListItem {
  id: number;
  name: string;
  price: string;
  image_url?: string;
  stock: number;
  is_in_stock: boolean;
}

// Order Types
export interface OrderItem {
  product_id: number;
  quantity: number;
}

export interface Order {
  id: number;
  customer_name: string;
  email: string;
  address: string;
  total_price: string; // Decimal as string
  items?: OrderItem[]; // Optional: may not be included in all API responses
  items_count?: number; // Optional: included in list views
  created_at: string; // ISO datetime
  updated_at: string; // ISO datetime
}

export interface OrderListItem {
  id: number;
  customer_name: string;
  email: string;
  total_price: string;
  items_count: number;
  created_at: string;
}

export interface CreateOrderRequest {
  customer_name: string;
  email: string;
  address: string;
  items: OrderItem[];
}

// Cart Types
export interface CartItem {
  product_id: number;
  product_name: string;
  price: string;
  quantity: number;
  total: string;
  image_url?: string;
}

export interface AddToCartRequest {
  product_id: number;
  quantity: number;
}

// API Response Types
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

