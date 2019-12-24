function toFaNumber(inputNumber) {
  if (inputNumber === undefined) return "";
  var str = inputNumber.toString();
  if (str === "") return "";
  str = str.replace(/0/g, "۰");
  str = str.replace(/1/g, "۱");
  str = str.replace(/2/g, "۲");
  str = str.replace(/3/g, "۳");
  str = str.replace(/4/g, "۴");
  str = str.replace(/5/g, "۵");
  str = str.replace(/6/g, "۶");
  str = str.replace(/7/g, "۷");
  str = str.replace(/8/g, "۸");
  str = str.replace(/9/g, "۹");
  str = str.replace(/,/g, ",");
  return str;
}

export { toFaNumber };
