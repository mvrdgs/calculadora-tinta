export const inputPattern = {
  width: /^\d{0,2}(?:[.]\d{0,2})?$/,
  height: /^\d{0,2}(?:[.]\d{0,2})?$/,
  windows: /^\d{0,2}?$/,
  doors: /^\d{0,2}?$/,
};

const wallSchema = {
  width: '1',
  height: '1',
  windows: '0',
  doors: '0',
};

export const roomDataSchema = {
  'Parede A': wallSchema,
  'Parede B': wallSchema,
  'Parede C': wallSchema,
  'Parede D': wallSchema,
};

export const errorsSchema = {
  'Parede A': null,
  'Parede B': null,
  'Parede C': null,
  'Parede D': null,
};
