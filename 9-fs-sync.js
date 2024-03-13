// SYNCHRONOUS

const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second)

// writeFileSync is used to create new file.
writeFileSync(
  "./content/result-sync.txt",
  `This is the result: ${first} \n ${second}`
);
console.log("Done with the task");
console.log("Starting the next one");

// ///
