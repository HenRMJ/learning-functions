
// 1. Write a function that logs 'Hello World!' to the console
// Write your code below this line (* don't forget to call your function)

const hello = () => {
    console.log("Hello World!");
}

hello();

// 2. Write a function to calulate the area of an object
// Formula: area = length * width
// Write your code below this line

const area = (length, width) => length * width;

console.log(`area = ${area(10,20)}`); // Function is called within console.log

// 3. Write a function to calculate the volume of an object
// Formula: length * width * height
// Write your code below this line

const volume = (length, width, height) => length * width * height;

console.log(`volume = ${volume(10, 20, 30)}`);

// 4. Write a function to calulate the score of a Super Bowl football game
//Football Scoring System: touchdown = 6, extraPoint = 1, twoPoint = 2, fieldGoal = 3
// Write your code below this line

const superBowlScore = (touchdown, extraPoint, twoPoint, fieldGoal) => (touchdown * 6) + extraPoint + (twoPoint * 2) + (fieldGoal * 3);

console.log(`SuperBowl score prediction: ${superBowlScore(3, 3, 0, 5)}`);

// Write your Bonus code below this line

const teamVersus = (teamOne, scoreOne, teamTwo, scoreTwo) => {
    console.log(`${teamOne}: ${scoreOne} ${teamTwo}: ${scoreTwo}`);
}

teamVersus('Bengals', superBowlScore(3,3,0,5), 'Rams', superBowlScore(0,0,0,0));