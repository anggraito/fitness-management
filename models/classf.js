'use strict';
module.exports = function(sequelize, DataTypes) {
  var classf = sequelize.define('classf', {
    ClassnameId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    starttime: DataTypes.TIME,
    endtime: DataTypes.TIME
  });
  // classf.associate = (models) => {
  //   classf.belongsToMany(models.member)
  // }
  return classf;
};
