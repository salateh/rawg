

function mapper<T, M extends Record<string, keyof T>>(
  obj: T,
  mapperObj: M,
): { [Key in keyof M]: T[M[Key]] } {
  const arr = Object.keys(mapperObj);
  let result = arr.reduce(
    (acc, key: keyof M) => {
      acc[key] = obj[mapperObj[key]];
      return acc;
    },
    {} as { [Key in keyof M]: T[M[Key]] },
  );
  return result;
}