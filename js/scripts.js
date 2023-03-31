function beepOne(number) {
  hasAOne = number.split("");
  if (hasAOne === 1) {
    return "Beep!";
  } else {
    return number
  };
}