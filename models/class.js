'use strict';
module.exports = function(sequelize, DataTypes) {
  var class = sequelize.define('class', {
    classnameId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    starttime: DataTypes.TIME,
    endtime: DataTypes.TIME
  });
  return class;
};
