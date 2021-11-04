export const inputPattern = {
  width: /^\d{0,2}(?:[.,]\d{0,2})?$/,
  height: /^\d{0,2}(?:[.,]\d{0,2})?$/,
  windows: /^\d?$/,
  doors: /^\d?$/,
};

const wallSchema = {
  width: '1',
  height: '1',
  windows: '0',
  doors: '0',
};

export const roomDataSchema = {
  'Parede 1': wallSchema,
  'Parede 2': wallSchema,
  'Parede 3': wallSchema,
  'Parede 4': wallSchema,
};

export const errorsSchema = {
  'Parede 1': null,
  'Parede 2': null,
  'Parede 3': null,
  'Parede 4': null,
};
