// Add shards on router
// You cannot include a hidden member in the seed list provided to sh.addShard()
db.getSiblingDB('admin');
var msg = sh.addShard("sd1/192.168.1.102:20000,192.168.1.100:20000");
printjson(msg);
var msg = sh.addShard("sd2/192.168.1.100:20001,192.168.1.101:20001");
printjson(msg);
var msg = sh.addShard("sd3/192.168.1.102:20002,192.168.1.101:20002");
printjson(msg);