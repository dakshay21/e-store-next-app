"use client";

import { useState, useEffect } from "react";
import { CartItem } from "@/types";
import { cartStorage } from "@/lib/cart";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(cartStorage.get());
  }, []);

  const addToCart = (item: CartItem) => {
    const updatedCart = cartStorage.add(item);
    setCart(updatedCart);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = cartStorage.update(productId, quantity);
    setCart(updatedCart);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cartStorage.remove(productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    cartStorage.clear();
    setCart([]);
  };

  const total = cartStorage.getTotal(cart);
  const itemCount = cartStorage.getItemCount(cart);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    total,
    itemCount,
  };
}

