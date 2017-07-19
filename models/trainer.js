'use strict';
module.exports = function(sequelize, DataTypes) {
  var trainer = sequelize.define('trainer', {
    name: DataTypes.STRING,
    ktp: DataTypes.STRING,
    telp: DataTypes.STRING
  });
  return trainer;
};
