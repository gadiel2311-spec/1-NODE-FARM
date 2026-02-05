const fs = require("fs");

// BLOCKING, synchronous way
//const texIn = fs.readFileSync("./txt/input.txt", "utf-8");
//console.log(texIn);
//const texOut = `This is what we know about the avocado: ${texIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync("./txt/output.txt", texOut);
//console.log("File written!");

// NO BLOCKING, synchronous way
fs.readFile("./txt/start.txt", "utf-8", (_err, _data1) => {
  fs.readFile(`./txt/${_data1}.txt`, "utf-8", (_err, _data2) => {
    console.log(_data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (_err, _data3) => {
      console.log(_data3);
    });
  });
});

console.log("Will read file!");
