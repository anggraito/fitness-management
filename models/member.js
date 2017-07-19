'use strict';
module.exports = function(sequelize, DataTypes) {
  var member = sequelize.define('member', {
    name: DataTypes.STRING,
    ktp: DataTypes.STRING,
    address: DataTypes.STRING,
    telp: DataTypes.STRING,
    plan: DataTypes.INTEGER
  });
  // member.associate = (models) => {
  //   member.belongsToMany(models.classf)
  // }
  return member;
};
