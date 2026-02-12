const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./modules/replaceTemplate");

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
/////////////////// SERVER//

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8",
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8",
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8",
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
//

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  //////////////////OVERVIEW PAGE//////////////////
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

    res.end(output);

    //////////////PRODUCT PAGE///////////////
  } else if (pathname === "/product") {
    const product = dataObj[query.id];

    /////////////////API//////////////////////
    //

    res.writeHead(200, { "Content-type": "text/html" });
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    ////////////////NOT FOUN
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

/////
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
