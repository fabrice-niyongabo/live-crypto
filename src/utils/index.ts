export const returnSymbolPrice = (filters: any[]): number => {
  try {
    let price = 0;

    const data = filters[0];
    if (data.minPrice) {
      price = data.minPrice;
    }

    return price;
  } catch (error) {
    return 0;
  }
};

export const returnSymbolMinQty = (filters: any[]): number => {
  try {
    let price = 0;

    const data = filters[1];
    if (data.minQty) {
      price = data.minQty;
    }

    return price;
  } catch (error) {
    return 0;
  }
};

export const returnSymbolMaxQty = (filters: any[]): number => {
  try {
    let price = 0;

    const data = filters[1];
    if (data.maxQty) {
      price = data.maxQty;
    }

    return price;
  } catch (error) {
    return 0;
  }
};

export const returnSymbolChange = (price: number, maxQty: number): number => {
  try {
    let percentage = (price / maxQty) * 100;

    return Number(percentage.toFixed(2));
  } catch (error) {
    return 0;
  }
};
