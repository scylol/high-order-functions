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


// Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name){
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']

// function filter(arr, fn) {
// 	let newArray = [];
// 	for(i=0;i<arr.length;i++){
// 			const ele = arr[i];
// 			if(fn(ele)) {
// 			newArray.push(ele);
// 			}
// 	}

	
// 	return newArray;
// }


// filter(myNames,filteredNames);

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


//rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

function hazardWarningCreator(typeOfWarning) {
	let warningCounter = 0;
	return function(location) {
		warningCounter++;
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
	};

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const sheepWarning = hazardWarningCreator('Sheep on the Road!');

rocksWarning('Main St and Pacific Ave');
iceWarning('37th and 8th');
sheepWarning('5th Mulberry St');















