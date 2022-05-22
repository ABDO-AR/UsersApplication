// Initilaizing(Models):
const User = require("./src/code/model").User;
const fs = require("fs");
const http = require("http");
const server = http.createServer(onRequest);

// Method(OnRequest):
function onRequest(req, res) {
  // Checking:
  if (req.url == "/favicon.ico" || req.url.includes("css")) return;
  // Initilaizing:
  let HTML_PAGES = "./src/pages/html/";
  HTML_PAGES += req.url == "/" ? "website.html" : "404.html";
  // Logging:
  console.log("#".repeat(30));
  console.log(req.url);
  console.log(HTML_PAGES);
  console.log("#".repeat(30));
  // Reading:
  fs.readFile(HTML_PAGES, { encoding: "utf-8" }, (err, data) => onReading(err, data, res));
}

// Method(OnReading):
function onReading(err, data, res) {
  // Checking:
  if (err) {
    // Logging:
    console.log(err);
    // Stopping:
    return;
  }
  // Configure:
  res.setHeader("Content-Type", "text/html");
  // Writing:
  res.write(data);
  // Sending:
  res.end();
}

// Starting:
server.listen(3000, "localhost", () => console.log("Server has been started"));
