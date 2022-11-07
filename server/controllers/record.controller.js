const database = require("../models");
const Record = database.records;
const PDFDocument = require("pdfkit-table");

exports.create = (req, res) => {
  const { pm2_5, latLong, timestamp } = req.body;

  Record.create({ pm2_5, latLong, timestamp })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while creating a record."
      });
    });
};

exports.findAll = (req, res) => {
  Record.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the records."
      });
    });
};

exports.pdfGenerate = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let doc = new PDFDocument({ margin: 30, size: "A4" });

  //doc.pipe(fs.createWriteStream("./document.pdf"));
  Record.findAll().then((data) => {
    const table = {
      title: "PM2.5 Records",
      headers: [
        {
          label: "Device ID",
          property: "device_id",
          width: 200,
          renderer: null
        },
        { label: "PM25", property: "pm2_5", width: 50, renderer: null },
        {
          label: "Lat-Long",
          property: "latLong",
          width: 150,
          renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => {
            const { coordinates } = row.latLong;
            return `${coordinates} `;
          }
        },
        { label: "Timestamp", property: "timestamp", width: 80, renderer: null }
      ],
      datas: data
    };

    doc.table(table, {
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8)
    });
    doc.pipe(res);
    doc.end();
  });
};
