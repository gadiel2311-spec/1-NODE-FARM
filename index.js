const fs = require("fs");

// BLOCKING, synchronous way
const texIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(texIn);
const texOut = `This is what we know about the avocado: ${texIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", texOut);
console.log("File written!");

// NO BLOCKING, synchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
