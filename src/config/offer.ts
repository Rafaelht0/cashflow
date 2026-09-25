// Dados da oferta centralizados. Tudo que o cliente ainda vai confirmar está aqui.

export const CHECKOUT_URL = 'https://pay.kiwify.com.br/cqGSRmh';

export const PRODUCT_NAME = 'Cash Flow';

export const PRODUCT_TAGLINE = 'Planeje, organize e conquiste';

// Preço confirmado pelo cliente: R$ 69,99 à vista ou 12x de R$ 6,99 (parcelado com juros,
// já que 12 x 6,99 passa do valor à vista). Deve bater com o que está configurado na Kiwify.
export const PRICE = {
  total: 'R$ 69,99',
  installments: '12x de R$ 6,99',
};

// TODO: cliente ainda não definiu o percentual do desconto de "comprar hoje". Ajustar aqui.
export const TODAY_DISCOUNT_PERCENT = 20;

export const GUARANTEE_DAYS = 7;

export const INSTAGRAM = {
  handle: '@_danihoffman',
  url: 'https://www.instagram.com/_danihoffman',
};
