module.exports = (app) => {
  const records = require("../controllers/record.controller.js");
  const bodyParser = require("body-parser");

  var router = require("express").Router();

  router.get("/", records.findAll);
  router.get("/download", records.pdfGenerate);
  router.post("/", bodyParser.json(), records.create);

  app.use("/api/records", router);
};
