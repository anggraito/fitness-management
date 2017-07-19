'use strict';
module.exports = function(sequelize, DataTypes) {
  var classmember = sequelize.define('classmember', {
    classId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER
  });
  classmember.associate = (models) => {
    classmember.belongsTo(models.classf);
    classmember.belongsTo(models.member);
  }
  return classmember;
};
