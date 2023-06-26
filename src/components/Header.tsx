import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import coffeeDeliLogo from "../assets/coffee-delivery-logo.svg";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 lg:py-8">
      <img src={coffeeDeliLogo} alt="Coffee Delivery Logo" />
      <nav className="flex items-center justify-between gap-3">
        <div className="flex items-center justify-between gap-1 bg-purple-light p-2 rounded-md">
          <MapPin size={22} weight="fill" className="text-purple" />
          <span className="text-sm text-purple-dark leading-0">
            Rio de Janeiro, RJ
          </span>
        </div>
        <NavLink to="cart">
          <div className="bg-yellow-light flex items-center justify-center rounded-md p-2">
            <ShoppingCart
              size={22}
              weight="fill"
              className="text-yellow-dark"
            />
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
