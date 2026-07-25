

let tests = ["login", "checkout", "search"];


console.log("Tests Array = ", tests);
console.log("--For loop--");

for (let i = 0; i < tests.length; i++) {
    console.log(i, tests[i]);
}

console.log("--for...of --");

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test) // value
}
console.log("--forEach--");

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

console.log("--entries--");

// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("--For loop to print Index and each element--");


let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");