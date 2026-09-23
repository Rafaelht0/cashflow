// Dados da oferta centralizados. Tudo que o cliente ainda vai confirmar está aqui.

export const CHECKOUT_URL = 'https://pay.kiwify.com.br/cqGSRmh';

export const PRODUCT_NAME = 'Cash Flow';

export const PRODUCT_TAGLINE = 'Planeje, organize e conquiste';

// Preço de lançamento confirmado pelo cliente.
export const PRICE = {
  total: 'R$ 79,90',
  // TODO: confirmar com o cliente se o parcelamento na Kiwify é sem juros
  // (79,90 / 12 ≈ 6,66; o valor real pode variar um pouco por causa de juros do parcelamento).
  installments: '12x de R$ 6,66',
};

// TODO: cliente ainda não definiu o percentual do desconto de "comprar hoje". Ajustar aqui.
export const TODAY_DISCOUNT_PERCENT = 20;

export const GUARANTEE_DAYS = 7;

export const INSTAGRAM = {
  handle: '@_danihoffman',
  url: 'https://www.instagram.com/_danihoffman',
};
