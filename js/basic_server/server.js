// Note that you will need Node for this

// First we load up all the required Node modules
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((request, response) => {
  // Step 1: Build a dynamic file path

  // If the requested url is just a forward slash, load index.html
  // Otherwise, the file is whatever was requested

  let filePath = path.join(__dirname, "public", 
  request.url === "/" ? "index.html" : request.url);

  // Get the file extension so we can indicate which content type should be loaded

  let extName = path.extname(filePath);

  // set the default content type to "text/html"

  let contentType = "text/html";

  // but here are our dynamic options

  switch(extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read the requested file, and paint its contents onto the page

  fs.readFile(filePath, (err, content) => {
    // We'll do some basic error handling first
    if(err) {
      if(err.code === "ENOENT") {
        // this means that the page wasn't found
        fs.readFile(path.join(__dirname, "public", "404.html"), () => {
          response.writeHead(200, {"Content-Type": "text/html"});
          response.end(content, "utf8");
        });
      } else {
        // we have a different error
        response.writeHead(500);
        response.end(`Server Error: ${err.code}`);
      }
    } else {
      // success
      response.writeHead(200, {"Content-Type": contentType});
      response.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

// once deployed, the port value will be an environmental variable
// we set the default to 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));