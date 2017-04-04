// Repeat functions

// function repeat(fn, n) {
// 	for (let i = 0; i < n; i++) {
// 		fn();
// 	}
// }

// function hello() {
// 	console.log('Hello world');
// }

// function goodbye() {
// 	console.log('Goodbye world');
// }

// repeat(hello, 5);
// repeat(goodbye, 5);

//--------------------------------------------------------------------------------

// Filter function

// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];




// function filter(arr, fn) {
//     let newArray = [];
//     for(i=0;i<arr.length;i++){
//             const ele = arr[i];
//             if(fn(ele)) {
//             newArray.push(ele);
//             }
//     }

    
//     return newArray;
// }

// filter(myNames, name => name[0] === 'R');

// ---------------------------------------------------------------------

function hazardWarningCreator(typeOfWarning) {
	let warningCounter = 0;
	return function(location) {
		warningCounter++;
		let time = '';
		if (warningCounter === 1) {
			time = 'time';
		}
		else {
			time = 'times';
		}
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
	};

}
// Bonus credit! Can you figure out how to log out "time" for a value of 1 and "times" for a value of 0 or > 2?

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const sheepWarning = hazardWarningCreator('Sheep on the Road!');

rocksWarning('Main St and Pacific Ave');
iceWarning('37th and 8th');
sheepWarning('5th Mulberry St');


//----------------------------------------------------------------------
// filter function

// let myArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// let newArray = [].concat(...myArray);


// function removesNegatives(num) {
// 	return num >= 0;
// }

// var negs = newArray.filter(removesNegatives);

// console.log(negs);

//-----------------------------------------------------------------

// Map function
	
	// let myArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


	// let totalSteps = myArray.map(function(num) {
	// 	return num[0] + num[1];
	// });

	// console.log(totalSteps);

	//------------------------------------

	let myArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

	let totalSteps = myArray.forEach(function(num) {
		console.log(num[0] + num[1]);

	});





