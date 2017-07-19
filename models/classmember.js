'use strict';
module.exports = function(sequelize, DataTypes) {
  var classmember = sequelize.define('classmember', {
    classId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return classmember;
};