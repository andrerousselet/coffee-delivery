import { useCoffeeCart } from "../hooks/useCoffeeCart";
import { formatPrice } from "../utils/formatPrice";
import { CoffeeCartItem } from "./CoffeeCartItem";

export function OrderSummary() {
  const { coffeeCart } = useCoffeeCart();

  const isCoffeeCartEmpty = coffeeCart.length === 0;
  const subTotalPrice = coffeeCart.reduce(
    (acc, currCoffee) => acc + currCoffee.qty * currCoffee.price,
    0
  );
  const shippingPrice = isCoffeeCartEmpty ? 0 : 350;
  const totalPrice = subTotalPrice + shippingPrice;

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
        <div className={`${!isCoffeeCartEmpty && "pt-6"} flex flex-col gap-3`}>
          <p className="flex items-center justify-between text-base-text">
            <span className="text-sm">Total de itens</span>
            <span>R$ {formatPrice(subTotalPrice)}</span>
          </p>
          <p className="flex items-center justify-between text-base-text">
            <span className="text-sm">Entrega</span>
            <span>R$ {formatPrice(shippingPrice)}</span>
          </p>
          <p className="flex items-center justify-between text-xl text-base-subtitle font-bold">
            <span>Total</span>
            <span>R$ {formatPrice(totalPrice)}</span>
          </p>
        </div>
        <div className="pt-6">
          <button
            disabled={isCoffeeCartEmpty}
            className="w-full rounded-md bg-yellow hover:bg-yellow-dark px-2 py-3 text-white text-sm leading-6 uppercase transition disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-yellow-dark"
          >
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
