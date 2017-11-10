module.exports = function(sequelize, DataType) {
  var customer = sequelize.define("customer", {
    name: {
      type: DataType.STRING,
      allowNull: false,
      len: [1]
    }
  });
  
  customer.associate = function(models) {
    customer.hasMany(models.burger, {
    });
  }
  
  return customer;
};






    