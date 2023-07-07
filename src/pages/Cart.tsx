import { FocusEvent, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  SpinnerGap,
} from "@phosphor-icons/react";
import { fetchAddressInfo } from "../utils/fetchAddressInfo";

const addressFormSchema = z.object({
  zipcode: z.number().describe("Digite apenas números").min(8).max(8),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
  district: z.string(),
  city: z.string(),
  uf: z.string().toUpperCase(),
});

type AddressFormData = z.infer<typeof addressFormSchema>;

export function Cart() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, setValue, setFocus, reset } = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
  });

  async function getAddressInfo(e: FocusEvent<HTMLInputElement>) {
    const zipcode = e.target.value;
    try {
      if (zipcode) {
        setIsLoading(true);
        const address = await fetchAddressInfo(zipcode);
        if (address) {
          setValue("street", address.logradouro);
          setValue("district", address.bairro);
          setValue("city", address.localidade);
          setValue("uf", address.uf);
          setFocus("number");
          setIsLoading(false);
        }
      } else {
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

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
              <div className="flex items-center relative w-fit">
                <input
                  type="text"
                  placeholder="CEP"
                  {...register("zipcode", {
                    valueAsNumber: true,
                    onBlur: getAddressInfo,
                  })}
                  className="w-[200px] p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
                {isLoading && (
                  <SpinnerGap
                    size={20}
                    className="animate-spin absolute right-3"
                  />
                )}
              </div>
              <input
                type="text"
                placeholder="Rua"
                {...register("street")}
                className="p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
              />
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Número"
                  {...register("number")}
                  className="w-[200px] p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register("complement")}
                  className="flex-1 p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register("district")}
                  className="w-[200px] p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register("city")}
                  className="flex-1 p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
                <input
                  type="text"
                  placeholder="UF"
                  {...register("uf")}
                  className="w-[60px] p-3 rounded h-10 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-sm placeholder:text-base-label bg-base-input text-base-text border border-base-button focus:border-base-button"
                />
              </div>
            </form>
          </div>
          <div className="bg-base-card p-10 rounded-md w-[640px] flex flex-col gap-8 mb-3">
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

// input type="number" without arrows
// -> https://stackoverflow.com/questions/71296535/how-to-remove-arrow-on-input-type-number-with-tailwind-css
