const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Forward requests to ngrok URL

const port = 3000;
const target = "https://staging7.gapowork.vn";

app.use(
  "/",
  createProxyMiddleware({
    target,
    changeOrigin: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
