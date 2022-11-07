const express = require("express");
const app = express();
const database = require("./models");
const cors = require("cors");

const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
};

database.sequelize
  .sync()
  .then(() => {
    console.log("DB synced on start.");
  })
  .catch((err) => {
    console.log("DB sync failure: " + err.message);
  });

require("./routes/record.routes")(app);

app.use(express.json());
app.use(cors(corsOptions));
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
