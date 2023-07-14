import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../utils/coffeeData";

interface CoffeeCartContextType {
  coffeeCart: Coffee[];
  updateCoffeeOnCart: (coffee: Coffee, qty: number) => void;
  removeCoffeeFromCart: (coffee: number) => void;
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType);

interface CoffeeCartProviderProps {
  children: ReactNode;
}

export function CoffeeCartProvider({ children }: CoffeeCartProviderProps) {
  const [coffeeCart, setCoffeeCart] = useState<Coffee[]>([]);

  function updateCoffeeOnCart(coffee: Coffee, qty: number) {
    const coffeeToUpdate = coffeeCart.find(
      (coffeeOnCart) => coffeeOnCart.id === coffee.id
    );
    setCoffeeCart((prevCart) => {
      if (!coffeeToUpdate) return [...prevCart, { ...coffee, qty }];

      const updatedCart = prevCart.map((coffeeOnCart) => {
        if (coffeeOnCart.id === coffee.id) return { ...coffee, qty };
        return coffeeOnCart;
      });
      return updatedCart;
    });
  }

  function removeCoffeeFromCart(coffeeId: number) {
    setCoffeeCart((prevCart) =>
      prevCart.filter((coffeeOnCart) => coffeeOnCart.id !== coffeeId)
    );
  }

  return (
    <CoffeeCartContext.Provider
      value={{
        coffeeCart,
        removeCoffeeFromCart,
        updateCoffeeOnCart,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
