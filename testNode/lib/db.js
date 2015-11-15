var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
// Connect to cloud database
var username = "nockuser"
var password = "nockpassword";
var address = '@ds053194.mongolab.com:53194/nockmarket';
connect();
// Connect to mongo
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}
function disconnect() {
	mongoose.disconnect()
}