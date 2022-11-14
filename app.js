const { createServer } = require("http");

const port = 3000;

const server = createServer((req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const parseBody = JSON.parse(body);
    console.log("parseBody", parseBody);
    const propsCount = Object.keys(parseBody).length;
    console.log("propsCount", propsCount);
    res
      .writeHead(200, {
        "Content-type": "text/plain",
      })
      .end(
        `Body from request secretFully accepted and parsed. It has ${propsCount}`
      );
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});