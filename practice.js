/**
 * Practice 1: count number of element as object
 */

function practice_1(input) {
	let output={};
	let outputKeys = Object.keys(output);
	input.forEach((v)=>{
		if(!outputKeys.includes(v)){
			output[v]= 1;
			outputKeys = Object.keys(output);
		}else{
			output[v] ++;
		}
	});
	return output;
}
let input1 = ['a', 'b', 'c', 'a', 'e', 'c', 'a', 'd', 'd', 'd'];
console.log(practice_1(input1)); 
// expected output: {'a':3, 'b':1, 'c':2}

/**
 * Practice 2: mapping character to number
 */
function practice_2(input, mapping) {
	let mappingKeys = Object.keys(mapping);
	return input.map((v=>{
		if(mappingKeys.includes(v)){
			return mapping[v];
		}else{
			return 'not in mapping';
		}
	}));
}
let arr = ['a', 'b', 'c', 'a', 'b' ,'c' ,'a'];
let mapping = {
	a: 1,
	b: 2,
	c: 3,
};
console.log(practice_2(arr, mapping)); 
// expected output: [1, 2, 3, 1, 2]

/**
 * Practice 3: group by the same key and add the value to a list
 */

function practice_3(input) {
	let output={};
	let outputKeys = Object.keys(output);
    
	input.forEach((v)=>{
		let inputKeys = Object.keys(v);//[key ,value]
		if(!outputKeys.includes(v[inputKeys[0]])){
			output[v[inputKeys[0]]]=[v[inputKeys[1]]];
			//console.log(outputKeys);
			outputKeys = Object.keys(output);
		}else{
			output[v[inputKeys[0]]].push(v[inputKeys[1]]);
		}
	});
	return output;
}
let input3 = [
	{ key: 'a', value: 3 },
	{ key: 'b', value: 1 },
	{ key: 'c', value: 2 },
	{ key: 'a', value: 3 },
	{ key: 'c', value: 5 },
];
console.log(practice_3(input3)); 
// expected output: {'a': [3,3], 'b': [1], 'c': [2,5]}

/**
 * Practice 4: group by the same key and sum up the value
 */

function practice_4(input) {
	let output={};
	let outputKeys = Object.keys(output);
    
	input.forEach((v)=>{
		let inputKeys = Object.keys(v);//[key ,value]
		if(!outputKeys.includes(v[inputKeys[0]])){
			output[v[inputKeys[0]]]=v[inputKeys[1]];
			//console.log(outputKeys);
			outputKeys = Object.keys(output);
		}else{
			output[v[inputKeys[0]]]+=v[inputKeys[1]];
		}
	});
	return output;
}

let input4 = [
	{ key: 'a', value: 3 },
	{ key: 'b', value: 1 },
	{ key: 'c', value: 2 },
	{ key: 'a', value: 3 },
	{ key: 'c', value: 5 },
];
console.log(practice_4(input4)); 
// expected output: {'a': 6, 'b': 1, 'c': 7}

/**
 * Practice 5: assign objects to students
 */

function practice_5(students, student_objects) {
	// let studentsOutputKeys=Object.keys(studentsOutput);
	let student_objectsKeys = ['student_id' ,'object'];
	let studentsOutput= students.map((val)=>{
		let valKeys = Object.keys(val);
		for (let v of student_objects){
			if(val[student_objectsKeys[0]] !== v[student_objectsKeys[0]]){
				continue;
			}else if(val[student_objectsKeys[0]] === v[student_objectsKeys[0]] && !valKeys.includes('objects')) {
				val.objects=[v.object];
				console.log(val.objects);
				valKeys = Object.keys(val);
				// studentsOutputKeys = Object.keys(studentsOutput);
			}else{
				val.objects.push(v.object);
			}
		}
		return {...val};
	});
	return studentsOutput;
}


let students = [
	{ student_id: 1, name: 'Arthur' },
	{ student_id: 2, name: 'Peter' },
	{ student_id: 3, name: 'Molly' },
];
let student_objects = [
	{ student_id: 1, object: 'pen' },
	{ student_id: 2, object: 'pen' },
	{ student_id: 3, object: 'book' },
	{ student_id: 1, object: 'book' },
	{ student_id: 3, object: 'phone' },
];
console.log(practice_5(students, student_objects));
// expected output:
// [
//     { student_id: 1, name: 'Arthur', objects: [ 'pen', 'book' ] },
//     { student_id: 2, name: 'Peter', objects: [ 'pen' ] },
//     { student_id: 3, name: 'Molly', objects: [ 'book', 'phone' ] }
// ]
