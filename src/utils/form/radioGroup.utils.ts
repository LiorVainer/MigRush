export const enumToRadioGroupOptions = (enumObj: object) =>
  Object.entries(enumObj).map(([key, value]) => ({ value, label: value }));
