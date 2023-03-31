function beepOne(number) {
  hasAOne = number.toString().split("");
  if (hasAOne.includes("1")) {
    return "Beep!";
  } else {
    return number
  };
};

function twoBoop(number) {
  if (number === 2) {
  return 2
  } else {
    return number
  };
};