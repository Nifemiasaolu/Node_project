// ASYNCHRONOUS

const { readFile, writeFile, read } = require("fs");

console.log("start")
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `This is the result:
     ${first} \n ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task")

// /////
