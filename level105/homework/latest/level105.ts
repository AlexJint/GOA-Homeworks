
import React, { createContext, useContext, useState, ReactNode } from "react";

// item type
type CartItem = {
  name: string;
  price: number;
};

// context type
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};
