export const getItemByKey = <
  K extends string | number | symbol,
  T extends Record<K, unknown>,
>(
  key: K,
  record: T,
): T[K] => record[key];
