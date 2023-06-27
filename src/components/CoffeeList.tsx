import { CoffeeCard } from "./CoffeeCard";
import { coffees } from "../utils/coffeeData";

export function CoffeeList() {
  return (
    <section>
      <h2 className="font-baloo text-3xl font-extrabold text-base-title mb-14">
        Nossos cafés
      </h2>
      <div className="pb-14 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-8 lg:grid-cols-4 lg:gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
}
