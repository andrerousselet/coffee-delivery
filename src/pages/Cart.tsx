import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

export function Cart() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <div className="pt-10 flex items-start justify-between gap-8">
        <div className="flex flex-col">
          <h2 className="font-baloo text-lg text-base-subtitle leading-5 mb-4">
            Confirme seu pedido
          </h2>
          <div className="bg-base-card p-10 rounded-md w-[640px] flex flex-col gap-8 mb-3">
            <div className="flex gap-2">
              <MapPinLine size={22} className="text-yellow-dark" />
              <div>
                <h3 className="text-base-subtitle leading-5 mb-[2px]">
                  Endereço de Entrega
                </h3>
                <p className="text-sm text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="CEP"
                className="w-[200px] p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
              />
              <input
                type="text"
                placeholder="Rua"
                className="p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
              />
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Número"
                  className="w-[200px] p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  className="flex-1 p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="w-[200px] p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  className="flex-1 p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
                <input
                  type="text"
                  placeholder="UF"
                  className="w-[60px] p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
              </div>
            </form>
          </div>
          <div className="bg-base-card p-10 rounded-md w-[640px] flex flex-col gap-8">
            <div className="flex gap-2">
              <CurrencyDollar size={22} className="text-purple" />
              <div>
                <h3 className="text-base-subtitle leading-5 mb-[2px]">
                  Pagamento
                </h3>
                <p className="text-sm text-base-text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex items-center gap-3 p-4 rounded-md border-none w-1/3 bg-base-button hover:bg-base-hover transition focus:outline-none focus:ring-2 focus:ring-purple focus:bg-purple-light"
              >
                <CreditCard size={16} className="text-purple" />
                <p className="text-xs leading-6 text-base-text">
                  CARTÃO DE CRÉDITO
                </p>
              </button>
              <button
                type="button"
                className="flex items-center gap-3 p-4 rounded-md border-none w-1/3 bg-base-button hover:bg-base-hover transition focus:outline-none focus:ring-2 focus:ring-purple focus:bg-purple-light"
              >
                <Bank size={16} className="text-purple" />
                <p className="text-xs leading-6 text-base-text">
                  CARTÃO DE DÉDITO
                </p>
              </button>
              <button
                type="button"
                className="flex items-center gap-3 p-4 rounded-md border-none w-1/3 bg-base-button hover:bg-base-hover transition focus:outline-none focus:ring-2 focus:ring-purple focus:bg-purple-light"
              >
                <Money size={16} className="text-purple" />
                <p className="text-xs leading-6 text-base-text">DINHEIRO</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
