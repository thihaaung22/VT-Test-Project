const dbConfig = require("../configs/db.config");
const Sequelize = require("sequelize");

const { DB, USER, PASSWORD, HOST, dialect, pool } = dbConfig;

const s = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  operatorsAliases: false,

  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle
  }
});

const database = {
  Sequelize,
  sequelize: s,
  records: require("./record.model.js")(s, Sequelize)
};

module.exports = database;
