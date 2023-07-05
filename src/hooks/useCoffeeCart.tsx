import { useContext } from "react";
import { CoffeeCartContext } from "../contexts/CoffeeCartContext";

export function useCoffeeCart() {
  return useContext(CoffeeCartContext);
}
