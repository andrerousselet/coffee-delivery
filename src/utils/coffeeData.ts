export type Coffee = {
  id: number;
  imgSrc: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export const coffees: Coffee[] = [
  {
    id: 1,
    imgSrc: "./assets/expresso-trad.png",
    tags: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 990,
  },
  {
    id: 2,
    imgSrc: "./assets/expresso-amer.png",
    tags: ["tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 990,
  },
  {
    id: 3,
    imgSrc: "./assets/expresso-cream.png",
    tags: ["tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 990,
  },
  {
    id: 4,
    imgSrc: "./assets/expresso-icy.png",
    tags: ["tradicional", "gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 990,
  },
  {
    id: 5,
    imgSrc: "./assets/coffee-with-milk.png",
    tags: ["tradicional", "com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 990,
  },
  {
    id: 6,
    imgSrc: "./assets/latte.png",
    tags: ["tradicional", "com leite"],
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 990,
  },
  {
    id: 7,
    imgSrc: "./assets/capuccino.png",
    tags: ["tradicional", "com leite"],
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 990,
  },
  {
    id: 8,
    imgSrc: "./assets/macchiato.png",
    tags: ["tradicional", "com leite"],
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 990,
  },
  {
    id: 9,
    imgSrc: "./assets/mocaccino.png",
    tags: ["tradicional", "com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 990,
  },
  {
    id: 10,
    imgSrc: "./assets/hot-chocolate.png",
    tags: ["especial", "com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 990,
  },
  {
    id: 11,
    imgSrc: "./assets/coffee-cuban.png",
    tags: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 990,
  },
  {
    id: 12,
    imgSrc: "./assets/coffee-hawaian.png",
    tags: ["especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 990,
  },
  {
    id: 13,
    imgSrc: "./assets/coffee-arab.png",
    tags: ["especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 990,
  },
  {
    id: 14,
    imgSrc: "./assets/coffee-irish.png",
    tags: ["especial", "alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 990,
  },
]