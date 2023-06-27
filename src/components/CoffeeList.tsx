import { CoffeeCard } from "./CoffeeCard";
import { coffees } from "../utils/coffeeData";

export function CoffeeList() {
  return (
    <section>
      <h2 className="font-baloo text-3xl font-extrabold text-base-title mb-14">
        Nossos cafés
      </h2>
      <div className="pb-14 grid grid-cols-4 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
}
