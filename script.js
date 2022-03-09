// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs";

//1b
console.log(warmHugs.toUpperCase());

//1c

console.log(warmHugs.replace("like", "love")); // This only shows what would happen if file were changed because it is only in the console log.

warmHugs = warmHugs.replace("like", "love") // Can't use let because can't redeclare. This actually runs changed file.
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
beenImpaled = beenImpaled.slice(18, 36);
// Since 18 is half of 36 it runs through string. This is a unique situation where either 18 or -18 will show "I've been impaled."
// Only counts through 35
// beenImpaled = beenImpaled.slice(-18);
console.log(beenImpaled);

// 3a
let dotDotDot = "..."

// 3b
let skullBones = `I don't have a skull ${dotDotDot} or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random (); // 0 through 0.99999
randomNumber *= 3; // 0 to 2.99999
randomNumber = Math.floor(randomNumber); // gets rid of decimal
randomNumber++; // Don't need ceil, because ++ gets random number to 3. With ceil, there is a small possibility that number could be 0 if random number is 0.0. ++ adds 1 so makes minimum = 1 and maximum = 3.
console.log(randomNumber);

// Bonus
// 6
console.log(" Let It Go!".toUpperCase().repeat(3).slice(-21));
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));
// or
console.log(reindeers.replace(/ /g, `_`)); // /g means global. / /g Means we want to replace spaces with underscores _ globally.
// or
console.log(reindeers.replaceAll(' ', '_')); // 

// 8
let squareRoot = Math.sqrt(2);
console.log(squareRoot);
console.log(Math.sqrt(2));

// or
console.log(Math.SQRT2);

// 9

let newRandomNumber = Math.random();
newRandomNumber *= 17;
newRandomNumber = Math.floor(newRandomNumber);
newRandomNumber += 7;
console.log(newRandomNumber);

// or

// let newRandomNumber = Math.ceil((Math.random()*17)+6);
// console.log(newRandomNumber);

// or

let newRandomNumber1 = (Math.floor((Math.random()*17)+7)); // Math.floor gets rid of anything after decimal point.  Pulls random number between 0-16, then adds 7. Therefore, random number will never be below 7 or above 23. (17 - 7 = 23.99999 and floor pulls off decimal)
console.log(newRandomNumber1);
