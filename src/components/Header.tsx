import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import coffeeDeliLogo from "../assets/coffee-delivery-logo.svg";
import { useCoffeeCart } from "../hooks/useCoffeeCart";

export function Header() {
  const { coffeeCart } = useCoffeeCart();

  const cartCounter = coffeeCart.reduce(
    (acc, currCoffee) => acc + currCoffee.qty,
    0
  );

  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between p-4 lg:py-8">
      <NavLink
        to="/"
        className="rounded focus:outline-none focus:ring-1 focus:ring-offset-4 focus:ring-purple"
      >
        <img src={coffeeDeliLogo} alt="Coffee Delivery Logo" />
      </NavLink>
      <nav className="flex items-center justify-between gap-3">
        <div className="flex items-center justify-between gap-1 bg-purple-light p-2 rounded-md">
          <MapPin size={22} weight="fill" className="text-purple" />
          <span className="text-sm text-purple-dark leading-0">
            Rio de Janeiro, RJ
          </span>
        </div>
        <NavLink
          to="cart"
          className="rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-dark"
        >
          <div className="bg-yellow-light flex items-center justify-center rounded-md p-2 relative">
            <ShoppingCart
              size={22}
              weight="fill"
              className="text-yellow-dark"
            />
            {cartCounter !== 0 && (
              <div className="absolute w-5 h-5 rounded-full bg-yellow-dark -top-2 -right-2 flex items-center justify-center">
                <span className="text-xs font-bold text-white text-center">
                  {cartCounter}
                </span>
              </div>
            )}
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
