'use strict';
module.exports = function(sequelize, DataTypes) {
  var classmember = sequelize.define('classmember', {
    classId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER
  });
  return classmember;
};
