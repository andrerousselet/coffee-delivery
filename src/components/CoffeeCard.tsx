import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import coffeeImg from "../assets/expresso-trad.png";

export function CoffeeCard() {
  const [qty, setQty] = useState<number>(1);

  return (
    <div className="px-6 pb-5 flex flex-col items-center w-64 h-80 bg-base-card rounded-md rounded-tr-3xl rounded-bl-3xl">
      <img src={coffeeImg} alt="Expresso Tradicional" className="-mt-5 mb-3" />
      <div className="mb-4">
        <div className="px-2 py-1 bg-yellow-light rounded-full flex">
          <span className="uppercase text-yellow-dark text-xs">
            Tradicional
          </span>
        </div>
      </div>
      <h4 className="font-baloo text-xl font-bold text-base-subtitle mb-2">
        Expresso Tradicional
      </h4>
      <p className="text-sm text-base-label w-52 text-center mb-8">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="flex items-center justify-between w-full">
        <div>
          <span className="text-sm text-base-text mr-1">R$</span>
          <span className="text-xl text-base-text font-extrabold font-baloo">
            9,90
          </span>
        </div>
        <form className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-base-button flex items-center gap-1">
            <button
              type="button"
              onClick={() =>
                setQty((prevQty) => {
                  if (qty === 1) return 1;
                  return prevQty - 1;
                })
              }
            >
              <Minus size={14} className="text-purple hover:text-purple-dark" />
            </button>
            <span className="outline-none bg-base-button w-5 text-center text-base-text">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((prevQty) => prevQty + 1)}
            >
              <Plus size={14} className="text-purple hover:text-purple-dark" />
            </button>
          </div>
          <button
            type="submit"
            className="p-2 rounded-md bg-purple-dark hover:bg-purple transition"
          >
            <ShoppingCart size={22} weight="fill" className="text-base-card" />
          </button>
        </form>
      </div>
    </div>
  );
}
