console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.log("and they're always glad you came.");//syntax error: missing 'g' in log.
console.log("You wanna be where you can see,");//syntax error: missing closing parenthesis
console.log("our troubles are all the same");
console.log("You wanna be where" + " everybody knows");//syntax error: missing +
console.log("Your name.");

// 1 false
// 2 true
// 3 false
// 4 false
// 5 false
// 6 false
// 7 true
// 8 false

// an assignment operator (=) assigns a name or quality to a variable
// the equality operator (==) runs the task to see if strings or numbers are true

let num = 1;
while (num <= 1000) {
    console.log(num);
    num++;
 }
 for (let i = 1; i <= 100; i++) {
    console.log('Ginger chocolate honey patties ' + i);
}
for ( let i = 1000; i >= 1; i--) {
    console.log(i);
}