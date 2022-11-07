module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "pmrecords",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 10000,
    idle: 10000
  }
};
