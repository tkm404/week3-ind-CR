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
  let thisMany = [];
  let total = 0;
  for (let i = 0; i <= number; i +=1) {
  thisMany.push(total + i);
  };
  let oneArray = [];
  thisMany.forEach(function(number) {
    let hasAOne = number.toString().split("");
    if (hasAOne.includes("3")) {
      oneArray.push("Won't you be my neighbor?")
    } else if 
      (hasAOne.includes("2")) {
      oneArray.push("Boop!")
    } else if 
      (hasAOne.includes("1")) {
        oneArray.push("Beep!")
    } else {
      oneArray.push(number)
    }
  });
  return oneArray
};

function gnosObor(number) {
  const holdArray = number.toString().split("");
  let reverseArray = holdArray.reverse().join("");
  total = reverseArray;
  let newRevArray = [];
  for (let i = total; i >= 0; i--) {
    newRevArray.push(total - i);
  };
  let twoArray = newRevArray.reverse()
  let displayTwoArray = [];
  twoArray.forEach(function(number) {
    let hasThreeTwoOne = number.toString().split("")
    if (hasThreeTwoOne.includes("3")) {
      displayTwoArray.push("Won't you be my neighbor?")
    } else if (hasThreeTwoOne.includes("2")) {
      displayTwoArray.push("Boop!")
    } else if (hasThreeTwoOne.includes("1")) {
      displayTwoArray.push("Beep!")
    } else {  
      displayTwoArray.push(number)
    }
  });
  return displayTwoArray
};

// UI LOGIC VVV

function reReverse() {
  event.preventDefault();
  const inpNumber = document.getElementById("number-enter").value;
  const playAgain = roboSong(inpNumber);
  document.getElementById("output").innerText = playAgain.join(" ");
  document.querySelector("img#roger").addEventListener("click", reverseOrder)
}


function reverseOrder() {
  event.preventDefault();
  const inpNumber = document.getElementById("number-enter").value;
  const playMore = gnosObor(inpNumber);
  document.getElementById("output").innerText = playMore.join(" ");
  document.querySelector("img#roger").addEventListener("click", reReverse);
}

function yesIWould() {
  event.preventDefault();
  const inpNumber = document.getElementById("number-enter").value;
  const playSong = roboSong(inpNumber);
  document.getElementById("output").innerText = playSong.join(" ");
  const secretMessage = document.createElement("div");
  secretMessage.setAttribute("id", "secret");
  secretMessage.append("Click the Robot to reverse the order!")
  document.querySelector("body").prepend(secretMessage)
  document.querySelector("img#roger").addEventListener("click", reverseOrder);
}

window.addEventListener("load", function() {
  const intro = document.createElement("h1");
  intro.append("Welcome to Mr. Robogers' Neighborhood");
  document.querySelector("body").append(intro);
  const form = document.createElement("form");
  form.setAttribute("id", "number-here");
  document.querySelector("body").append(form)
  const div = document.createElement("div");
  document.querySelector("form").append(div);
  const imgRogers = document.createElement("img");
  imgRogers.setAttribute("src", "img/mr-rogers-robot.jpg")
  imgRogers.setAttribute("width", "50%");
  imgRogers.setAttribute("align", "left");
  imgRogers.setAttribute("id", "roger")
  imgRogers.setAttribute("alt", "Mr. Robogers");
  document.querySelector("div").append(imgRogers);
  const label = document.createElement("label");
  label.setAttribute("for", "input");
  label.append("Enter a number:");
  document.querySelector("div").append(label);
  const input = document.createElement("input");
  input.setAttribute("id", "number-enter");
  input.setAttribute("type", "text");
  document.querySelector("div").append(input);
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.append("Won't you be my Neighbor?");
  document.querySelector("input").after(button)
  const musicBox = document.createElement("div");
  musicBox.setAttribute("id", "output");
  document.querySelector("body").append(musicBox)

  document.querySelector("form#number-here").addEventListener("submit", yesIWould);
});