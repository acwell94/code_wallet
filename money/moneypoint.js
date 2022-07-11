export const PointComma = (price: any) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
