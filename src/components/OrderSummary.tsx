import { useCoffeeCart } from "../hooks/useCoffeeCart";
import { CoffeeCartItem } from "./CoffeeCartItem";

export function OrderSummary() {
  const { coffeeCart } = useCoffeeCart();

  return (
    <div className="flex flex-col">
      <h2 className="font-baloo text-lg text-base-subtitle leading-5 mb-4">
        Cafés selecionados
      </h2>
      <div className="bg-base-card p-10 rounded-md rounded-tr-3xl rounded-bl-3xl w-[448px] flex flex-col gap-8 mb-3">
        {coffeeCart.map((coffee) => (
          <CoffeeCartItem key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
