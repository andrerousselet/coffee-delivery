interface AddressFromAPI {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export async function fetchAddressInfo(zipcode: string): Promise<AddressFromAPI> {
  const addressResponse = await fetch(
    `https://viacep.com.br/ws/${zipcode}/json/`
  );
  const parsedAddress = await addressResponse.json();
  return parsedAddress;
}