"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type ProductContextType = {
  search: string;
  setSearch: (value: string) => void;

  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  return (
    <ProductContext.Provider
      value={{
        search,
        setSearch,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context)
    throw new Error(
      "useProducts must be inside ProductProvider"
    );

  return context;
}