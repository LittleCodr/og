"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase";

const STORAGE_KEY = "og-beauty-cart";

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = (item: Omit<CartItem, "qty">) => {
    if (analytics) {
      (logEvent as any)(analytics, "add_to_cart", {
        currency: "INR",
        value: item.price,
        items: [{ item_id: item.id, item_name: item.title, price: item.price, quantity: 1 }]
      });
    }

    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id: string) => {
    const itemToRemove = items.find(i => i.id === id);
    if (analytics && itemToRemove) {
      (logEvent as any)(analytics, "remove_from_cart", {
        currency: "INR",
        value: itemToRemove.price * itemToRemove.qty,
        items: [{ item_id: itemToRemove.id, item_name: itemToRemove.title, price: itemToRemove.price, quantity: itemToRemove.qty }]
      });
    }
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const setQty = (id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  };

  const clearCart = () => setItems([]);

  const totalCount = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, setQty, clearCart, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
