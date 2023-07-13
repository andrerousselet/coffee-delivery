export function formatPrice(price: number) {
  return String((price/100).toFixed(2).replace(".", ","));
}