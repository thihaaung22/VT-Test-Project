const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define("records", {
    device_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    pm2_5: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    latLong: {
      type: DataTypes.GEOMETRY("POINT"),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  });

  return Record;
};
