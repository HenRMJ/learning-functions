
// 1. Write a function that logs 'Hello World!' to the console
// Write your code below this line (* don't forget to call your function)
function greet() {
	console.log('Hello World!');
}
greet();

// 2. Write a function to calulate the area of an object
// Formula: length * width
// Write your code below this line
function area(length, width) {
	return length * width;
}
console.log(`area = ${area(10,20)}`); // Function is called within console.log

// 3. Write a function to calculate the volume of an object
// Formula: length * width * height
// Write your code below this line
function volume(length, width, height) {
	return length * width * height;
}
console.log(`volume = ${volume(10, 20, 30)}`);

// 4. Write a function to calulate the score of a Super Bowl football game
//Football Scoring System: touchdown = 6, extraPoint = 1, twoPoint = 2, fieldGoal = 3
// Write your code below this line
function superBowlScore(touchdown, extraPoint, twoPoint, fieldGoal) {
	return extraPoint+
	(touchdown * 6) +
	(fieldGoal * 3) +
	(twoPoint * 2);
}


console.log(`SuperBowl score prediction: ${superBowlScore(3, 3, 0, 5)}`);

// Write your Bonus code below this line
let bengalsScore = superBowlScore(3, 3, 0, 5);
let ramsScore = superBowlScore(0, 3, 0, 2);
let finalScore = (`Bengals: ${bengalsScore} Rams: ${ramsScore}`);

console.log(finalScore);
