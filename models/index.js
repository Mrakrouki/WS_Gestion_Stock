var Sequelize = require('sequelize');
var sequelize = new Sequelize('soap', 'root', 'afcepf', {
    host: "127.0.0.1",
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

// load models                 
var models = [                 
  'product', 'product_stock'            
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});