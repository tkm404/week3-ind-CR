Title: Mr. Robogers' Neighborhood

Week 3 Independent Code Review at Epicodus.

This webpage should demonstrate the TDD method, or "Testing Driven Development," and show my understanding of for / forEach loops in JavaScript. Also, the code should show my adherence to organziation- keeping Business logic and UI logic separate in my JS script page.

The user enters a number in the input field and presses the "Won't you be my Neighbor?" button. The result should appear as a series of numbers counting up from the inputted number, interspersed with text, "Beep!" "Boop!" and "Won't you be my neighbor?" The text appears according to this hierarchy: numbers with 3 display a message before numbers with 2; before numbers with 1. Additional functionality WIP: clicking on the image will reverse the order of the text output.

Describe: oneBeep()

Test: "It should return "Beep!" when a 1 is entered."
Code: oneBeep(1);
Expected Output: "Beep!"

Test: "It should return an input when a 1 is not entered."
Code oneBeep(2);
Expected Output: 2

Test: "It should return "Beep!" when a number containing 1 is entered."
Code: oneBeep(11);
Expected Output: "Beep!"



Describe: twoBoop()

Test: "It should return "Boop!" when a 2 is entered."
Code: twoBoop(2);
Expected Output: "Boop!"

Test: "It should return an input when a 2 is not entered."
Code: twoBoop(1);
Expected Output: 1

Test: "It should return "Boop!" when a number containing 2 is entered."
Code: twoBoop(25);
Expected Output: "Boop!"

Describe: threeNeigh()

Test: "It should return "Won't you be my neighbor?" when a 3 is entered."
Code: threeNeigh(3);
Expected Output: "Won't you be my nieghbor?"

Test: "It should return an input when a 3 is not entered."
Code: threeNeigh(1);
Expected Output: 1

Test: "It should return "Won't you be my neighbor?" when a number containing 3 is entered."
Code: threeNeigh(123);
Expected Output: "Won't you be my neighbor?"

Describe: roboSong()

Test: "It should return an array of the inputted number."
Code: roboSong(3);
Expected Output: [3];

Test: "It should return an array of numbers from 0 to the inputted number."
Code: roboSong(3);
Expected Output: [0, 1, 2, 3];

Test: "It should return an array of numbers, and for each number containing 1 it should return "Beep!"
Code: roboSong(3);
Expected Output: [0, Beep!, 2, 3];

Test: "It should return an array of numbers, and for each number containing 2 it should return "Boop!"
Code: roboSong(3);
Expected Output: [0, "Beep!", "Boop!", 3];

Test: "It should return an array of numbers, and for each number containing 3 it should return "Won't you be my neighbor?"
Code: roboSong(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"];

Test: "It should return an array of numbers, and for each multi-digit number containing 2, it should return "Boop!" and not "Beep!"
Code: roboSong(12);
Expected Output: [... 8, 9, "Beep!", "Beep!", "Boop!"];

Test: "It should return an array of numbers, and for each multi-digit number containing 3, it should return "Won't you be my neighbor?" and neither "Beep!" nor "Boop!"
Code: roboSong(13);
Expected Output: [... 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"];

Describe: gnosObor()

Test: "It should return the inputted number when a number is inputted."
Code: gnosObor(1);
Expected Output: 1

Test: "It should return the inputted number as a string array."
Code: gnosObor(1);
Expected Output: ["1"] 

Test "It should return the inputted number as a string reversed."
Code: gnosObor(12);
Expected Output: "21"

Test "It should return an array of numbers from 0 to the reversed inputted number>"
Code: gnosObor(21);
Expected Output: [... 7, 8, 9, 10, 11, 12]

Test: "It should return an array of numbers from the highest reveresd inputted number to 0."
Code: gnosObor(21);
Expected Output: [12, 11, 10, ... 2, 1, 0]

Test: "It should return an array of numbers, and for each number containing 3 return "Will you be my neighbor?"
Code: gnosObor(31);
Expected Output: ["Will you be my neighbor?, 12, 11, 10... 4, "Will you be my neighbor?", 2, 1, 0]