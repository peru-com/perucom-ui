export const formatValueToNumber = (value: string): string => {
  return value.replace(/[^0-9]/g, '');
};

export const getPaddingByPosition = (position: string) => {
  return `padding-${position}: 42px`;
};

export const getLocationByPosition = (position: string) => {
  return `${position}: 16px`;
};
