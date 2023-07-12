import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../utils/coffeeData";

interface CoffeeCartContextType {
  coffeeCart: Coffee[];
  addCoffeeToCart: (coffee: Coffee, qty: number) => void;
  removeCoffeeFromCart: (coffee: number) => void;
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType);

interface CoffeeCartProviderProps {
  children: ReactNode;
}

export function CoffeeCartProvider({ children }: CoffeeCartProviderProps) {
  const [coffeeCart, setCoffeeCart] = useState<Coffee[]>([]);

  function addCoffeeToCart(coffee: Coffee, qty: number) {
    const updatedCoffee = { ...coffee, qty };
    setCoffeeCart((prevCart) => [
      ...prevCart.filter((coffeeToUpdate) => coffeeToUpdate.id !== coffee.id),
      updatedCoffee,
    ]);
  }

  function removeCoffeeFromCart(coffeeId: number) {
    setCoffeeCart((prevCart) =>
      prevCart.filter((coffeeToRemove) => coffeeToRemove.id !== coffeeId)
    );
  }

  return (
    <CoffeeCartContext.Provider
      value={{ coffeeCart, addCoffeeToCart, removeCoffeeFromCart }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
