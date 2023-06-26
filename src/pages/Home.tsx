import { CoffeeList } from "../components/CoffeeList";
import { Hero } from "../components/Hero";

export function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Hero />
      <CoffeeList />
    </main>
  );
}
