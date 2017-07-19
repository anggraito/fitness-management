'use strict';
module.exports = function(sequelize, DataTypes) {
  var classname = sequelize.define('classname', {
    name: DataTypes.STRING
  });
  return classname;
};
