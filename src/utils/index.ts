export const returnSymbolPrice = (filters: any[]): number => {
  let price = 0;

  const data = filters[0];
  if (data.minPrice) {
    price = data.minPrice;
  }

  return price;
};

export const returnSymbolMinQty = (filters: any[]): number => {
  let price = 0;

  const data = filters[1];
  if (data.minQty) {
    price = data.minQty;
  }

  return price;
};

export const returnSymbolMaxQty = (filters: any[]): number => {
  let price = 0;

  const data = filters[1];
  if (data.maxQty) {
    price = data.maxQty;
  }

  return price;
};

export const returnSymbolChange = (price: number, maxQty: number): number => {
  let percentage = (price / maxQty) * 100;

  return Number(percentage.toFixed(2));
};
