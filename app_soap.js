		var http = require('http');
    var soap = require('soap');
    var async = require('async');
    var Sequelize = require('sequelize');
    var sequelize = new Sequelize('soap', 'root', 'afcepf', {
        host: "127.0.0.1",
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    });
    var Product = require('./models/index').product;
    var ProductStock = require('./models/index').product_stock;
    var produit = {};
    var stockProduit = {};
    var stockDispo = {};
    var asyncTasks = [];
    var gestionstockservice = {
        GestionStockService: {
            Stock_Port: {
                
                getProduct: function (args, callback) {
					
                    var idProduitR = args.idProduct;               
                    asyncTasks.push(function(callback){
                        // Call an async function, often a save() to DB
                        Product.findOne({
                         where: {
                           id_product: idProduitR
                            }
                        }).then(function(result){
                            produit = result.dataValues;
                            callback();    
                        });
                    });

                    asyncTasks.push(function(callback){

                        ProductStock.findOne({
                         where: {
                           id_product: idProduitR
                            }
                        }).then(function(result){
                            stockProduit = result.dataValues;
                            callback();
                        });
                    });

                    async.parallel(asyncTasks, function(){
                        // All tasks are done now
                        produit.stock = stockProduit;
                        callback({'Produit': produit});
                    });                  
                },

                getStockProduct: function (args, callback) {
                    var idProduit = args.idProduct;
                    var qteDemand = args.quantite;

                    asyncTasks.push(function(callback){

                        ProductStock.findOne({
                         where: {
                           id_product: idProduit
                            }
                        }).then(function(result){
                            stockDispo = result.dataValues;
                            callback();
                        });
                    });

                    async.parallel(asyncTasks, function(){
                        if(qteDemand <= stockDispo.quantite){
                            callback({'isEnoughStock': true});    
                        } else {
                            callback({'isEnoughStock': false});
                        }                        
                    });
                }
            }
        }        
    };

var wsdlxml = require('fs').readFileSync('gestionStock.wsdl', 'utf8'),
server = http.createServer(function (request, response) {
    response.end("404: Not Found: " + request.url);
});

var PORT = 13000;

server.listen(PORT);
console.log('server running on port ' + PORT);

soap.listen(server, '/gestionstockservice', gestionstockservice, wsdlxml);
