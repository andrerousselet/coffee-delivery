import { ShoppingCart, Package, Coffee, Timer } from "@phosphor-icons/react";
import coffeeCupHeroImg from "../assets/coffee-cup-hero.png";

export function Hero() {
  return (
    <section className="my-12 lg:my-24 flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-md text-center md:max-w-xl lg:text-left">
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="font-baloo text-3xl md:text-5xl leading-tight text-base-title font-extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h3 className="text-lg md:text-xl leading-tight text-base-subtitle">
            Com o Coffee Delivery você receber o seu café onde estiver, a
            qualquer hora
          </h3>
        </div>
        <div className="flex flex-col gap-5 items-center max-w-[567px] md:flex-row md:gap-10">
          <div className="flex flex-col gap-5 w-[294px] md:w-[231px]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 rounded-full bg-yellow-dark">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="text-background"
                />
              </div>
              <span className="text-base-text leading-tight">
                Compra simples e segura
              </span>
            </div>
            <div className="flex items-center gap-3 w-[231px]">
              <div className="flex items-center justify-center p-2 rounded-full bg-yellow">
                <Timer size={16} weight="fill" className="text-background" />
              </div>
              <span className="text-base-text leading-tight">
                Entrega rápida e rastreada
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-[294px]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 rounded-full bg-base-text">
                <Package size={16} weight="fill" className="text-background" />
              </div>
              <span className="text-base-text leading-tight">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 rounded-full bg-purple">
                <Coffee size={16} weight="fill" className="text-background" />
              </div>
              <span className="text-base-text leading-tight">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={coffeeCupHeroImg} alt="Coffe Cup image" />
      </div>
    </section>
  );
}
