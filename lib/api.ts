import {
  Product,
  ProductListItem,
  Order,
  OrderListItem,
  CreateOrderRequest,
  AddToCartRequest,
  PaginatedResponse,
} from "@/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        response.status,
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
}

// Product API
export const productApi = {
  getAll: async (
    page = 1,
    pageSize = 20
  ): Promise<PaginatedResponse<ProductListItem>> => {
    return fetchApi(`/products/?page=${page}&page_size=${pageSize}`);
  },

  getById: async (id: number): Promise<Product> => {
    return fetchApi(`/products/${id}/`);
  },

  search: async (query: string): Promise<ProductListItem[]> => {
    return fetchApi(`/products/search/?q=${encodeURIComponent(query)}`);
  },

  getInStock: async (): Promise<ProductListItem[]> => {
    return fetchApi(`/products/in-stock/`);
  },

  create: async (product: Omit<Product, "id">): Promise<Product> => {
    return fetchApi(`/products/`, {
      method: "POST",
      body: JSON.stringify(product),
    });
  },

  update: async (id: number, product: Partial<Product>): Promise<Product> => {
    return fetchApi(`/products/${id}/`, {
      method: "PUT",
      body: JSON.stringify(product),
    });
  },

  delete: async (id: number): Promise<void> => {
    return fetchApi(`/products/${id}/`, {
      method: "DELETE",
    });
  },
};

// Order API
export const orderApi = {
  getAll: async (
    page = 1,
    pageSize = 20
  ): Promise<PaginatedResponse<OrderListItem>> => {
    return fetchApi(`/orders/?page=${page}&page_size=${pageSize}`);
  },

  getById: async (id: number): Promise<Order> => {
    return fetchApi(`/orders/${id}/`);
  },

  create: async (order: CreateOrderRequest): Promise<Order> => {
    return fetchApi(`/orders/`, {
      method: "POST",
      body: JSON.stringify(order),
    });
  },

  getByEmail: async (email: string): Promise<Order[]> => {
    return fetchApi(`/orders/by-email/?email=${encodeURIComponent(email)}`);
  },
};

// Cart API
export const cartApi = {
  addToCart: async (item: AddToCartRequest) => {
    return fetchApi(`/cart/add/`, {
      method: "POST",
      body: JSON.stringify(item),
    });
  },
};

