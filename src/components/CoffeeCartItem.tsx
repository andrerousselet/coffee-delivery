import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { Coffee } from "../utils/coffeeData";
import { useCoffeeCart } from "../hooks/useCoffeeCart";
import { formatPrice } from "../utils/formatPrice";

interface CoffeeCartItemProps {
  coffee: Coffee;
}

export function CoffeeCartItem({ coffee }: CoffeeCartItemProps) {
  const { removeCoffeeFromCart } = useCoffeeCart();
  const { title, price, qty } = coffee;

  return (
    <div className="flex items-start justify-between pb-6 border-b border-b-base-button">
      <div className="flex items-center gap-5">
        <img src={coffee.imgSrc} alt={title} className="w-16 h-16" />
        <div className="flex flex-col gap-2">
          <p className="text-base-subtitle leading-tight">{title}</p>
          <div className="flex gap-2">
            <div className="p-2 rounded-md bg-base-button flex items-center gap-1">
              <button
                type="button"
                // onClick={() =>
                //   setQty((prevQty) => (prevQty === 1 ? 1 : prevQty - 1))
                // }
              >
                <Minus
                  size={14}
                  className="text-purple hover:text-purple-dark"
                />
              </button>
              <span className="outline-none bg-base-button w-5 text-center text-base-text">
                {qty}
              </span>
              <button
                type="button"
                // onClick={() => setQty((prevQty) => prevQty + 1)}
              >
                <Plus
                  size={14}
                  className="text-purple hover:text-purple-dark"
                />
              </button>
            </div>
            <button
              type="button"
              className="p-2 rounded-md bg-base-button hover:bg-base-hover flex items-center gap-1"
              onClick={() => removeCoffeeFromCart(coffee.id)}
            >
              <Trash size={16} className="text-purple" />
              <span className="text-xs leading-6 text-base-text">REMOVER</span>
            </button>
          </div>
        </div>
      </div>
      <span className="font-bold text-base-text">
        R$ {formatPrice(price * qty)}
      </span>
    </div>
  );
}
