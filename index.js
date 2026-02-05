const fs = require("fs");
const http = require("http");
const url = require("url");

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
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT ");
  } else if (pathName === "/api") {
    ///
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "helo-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});
/////
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
