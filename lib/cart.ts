import { CartItem } from "@/types";

const CART_STORAGE_KEY = "ecommerce_cart";

export const cartStorage = {
  get: (): CartItem[] => {
    if (typeof window === "undefined") return [];
    try {
      const cart = localStorage.getItem(CART_STORAGE_KEY);
      return cart ? JSON.parse(cart) : [];
    } catch {
      return [];
    }
  },

  set: (cart: CartItem[]): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  },

  add: (item: CartItem): CartItem[] => {
    const cart = cartStorage.get();
    const existingIndex = cart.findIndex(
      (i) => i.product_id === item.product_id
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += item.quantity;
      cart[existingIndex].total = (
        parseFloat(cart[existingIndex].price) * cart[existingIndex].quantity
      ).toFixed(2);
    } else {
      cart.push(item);
    }

    cartStorage.set(cart);
    return cart;
  },

  update: (productId: number, quantity: number): CartItem[] => {
    const cart = cartStorage.get();
    const itemIndex = cart.findIndex((i) => i.product_id === productId);

    if (itemIndex > -1) {
      if (quantity <= 0) {
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].quantity = quantity;
        cart[itemIndex].total = (
          parseFloat(cart[itemIndex].price) * quantity
        ).toFixed(2);
      }
    }

    cartStorage.set(cart);
    return cart;
  },

  remove: (productId: number): CartItem[] => {
    const cart = cartStorage.get().filter((i) => i.product_id !== productId);
    cartStorage.set(cart);
    return cart;
  },

  clear: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(CART_STORAGE_KEY);
  },

  getTotal: (cart: CartItem[]): string => {
    const total = cart.reduce(
      (sum, item) => sum + parseFloat(item.total),
      0
    );
    return total.toFixed(2);
  },

  getItemCount: (cart: CartItem[]): number => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },
};

