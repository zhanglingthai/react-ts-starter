//判断是否为非
export const isFalsy = (value: any) =>
  value === 0 || value === "0" ? false : !value;

//清理对象中空值的键值对
export const cleanObject = (obj: any) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
