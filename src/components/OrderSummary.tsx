import { useCoffeeCart } from "../hooks/useCoffeeCart";
import { formatPrice } from "../utils/formatPrice";
import { CoffeeCartItem } from "./CoffeeCartItem";

export function OrderSummary() {
  const { coffeeCart } = useCoffeeCart();

  const totalPrice = coffeeCart.reduce(
    (acc, currCoffee) => acc + currCoffee.qty * currCoffee.price,
    0
  );

  return (
    <div className="flex flex-col">
      <h2 className="font-baloo text-lg text-base-subtitle leading-5 mb-4">
        Cafés selecionados
      </h2>
      <div className="bg-base-card p-10 rounded-md rounded-tr-3xl rounded-bl-3xl w-[448px] mb-3">
        <div className="flex flex-col space-y-6">
          {coffeeCart.map((coffee) => (
            <CoffeeCartItem key={coffee.id} coffee={coffee} />
          ))}
        </div>
        <div className="pt-6 flex flex-col gap-3">
          <p className="flex items-center justify-between text-base-text">
            <span className="text-sm">Total de itens</span>
            <span>R$ {formatPrice(totalPrice)}</span>
          </p>
          <p className="flex items-center justify-between text-base-text">
            <span className="text-sm">Entrega</span>
            <span>R$ {formatPrice(350)}</span>
          </p>
          <p className="flex items-center justify-between text-xl text-base-subtitle font-bold">
            <span>Total</span>
            <span>R$ {formatPrice(totalPrice + 350)}</span>
          </p>
        </div>
        <div className="pt-6">
          <button className="w-full rounded-md bg-yellow hover:bg-yellow-dark px-2 py-3 text-white text-sm leading-6 uppercase transition">
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
