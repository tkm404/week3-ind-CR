function oneBeep(number) {
  hasAOne = number.toString().split("");
  if (hasAOne.includes("1")) {
    return "Beep!";
  } else {
    return number
  };
};

function twoBoop(number) {
  hasATwo = number.toString().split("");
  if (hasATwo.includes("2")) {
  return "Boop!";
  } else {
    return number
  };
};

function threeNeigh(number) {
  hasAThree = number.toString().split("");
  if (hasAThree.includes("3")) {
  return "Won't you be my neighbor?"
  } else {
    return number
  };
};

function roboSong(number) {
  let thisMany = []
  let total = 0
  for (let i = 0; i <= number; i +=1) {
  thisMany.push(total + i);
  }
  thisMany.forEach(function(number)) {
    if (number ==="1") {
      thisMany.push("Beep!")
    }
  }
  return beepArray
  } 