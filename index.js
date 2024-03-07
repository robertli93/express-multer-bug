const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const PORT = 1337;

const app = express();

app.get("/health-check", function (req, res, next) {
  return res.json({ success: true });
});

app.post("/profile", upload.array("avatar"), function (req, res, next) {
  return res.json({ success: true });
});

process.on("uncaughtException", (err) => {
  if (err.message !== "Unexpected end of form") {
    // Gracefully shut down your application if it is not the uncatch bug from multer
    process.exit(1);
  }
});

app.listen(PORT, () => {
  console.log(`Express started at port:${PORT}`);
});
