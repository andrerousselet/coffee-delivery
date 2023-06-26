import { CoffeeCard } from "./CoffeeCard";

export function CoffeeList() {
  return (
    <section>
      <h2 className="font-baloo text-3xl font-extrabold text-base-title mb-14">
        Nossos cafés
      </h2>
      <div className="pb-14">
        <CoffeeCard />
      </div>
    </section>
  );
}
