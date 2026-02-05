const fs = require("fs");
const http = require("http");

//////////////////////////////////////////////////////////////
// FILES
// BLOCKING, synchronous way
//const texIn = fs.readFileSync("./txt/input.txt", "utf-8");
//console.log(texIn);
//const texOut = `This is what we know about the avocado: ${texIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync("./txt/output.txt", texOut);
//console.log("File written!");

// NO BLOCKING, synchronous way
//fs.readFile("./txt/start.txt", "utf-8", (_err, _data1) => {
// if (_err) return console.log("ERROR! 🤯");
//fs.readFile(`./txt/${_data1}.txt`, "utf-8", (_err, _data2) => {
//  console.log(_data2);
//  fs.readFile(`./txt/append.txt`, "utf-8", (_err, _data3) => {
//   console.log(_data3);

//  fs.writeFile(
//    "./txt/final.txt",
//    `${_data2}\n${_data3}`,
//    "utf-8",
//   (err) => {
//     console.log("Your file has been written 😁");
//},
//);
//});
//});
//});

//console.log("Will read file!");
////////////////////////////////////////////////////////////////////
// SERVER//
const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});
/////
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
