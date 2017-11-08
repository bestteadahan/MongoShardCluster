// Initialize RS: "sd1"
connect("192.168.1.102:20000/admin");
var config = {
    _id: "sd1",
    members: [
        {
            _id: 0,
            host: "192.168.1.102:20000",
            priority: 1.0
        },
        {
            _id: 1,
            host: "192.168.1.100:20000",
            priority: 0.5,
        },
        {
            _id: 2,
            host: "192.168.1.101:20000",
            hidden: true,
            priority: 0,
            votes: 0,
            slaveDelay: 900
        }
    ]
};
var msg = rs.initiate(config);
printjson(msg);

// Initialize RS: "sd2"
connect("192.168.1.100:20001/admin");
var config = {
    _id: "sd2",
    members: [
        {
            _id: 0,
            host: "192.168.1.100:20001",
            priority: 1.0
        },
        {
            _id: 1,
            host: "192.168.1.101:20001",
            priority: 0.5
        },
        {
            _id: 2,
            host: "192.168.1.102:20001",
            hidden: true,
            priority: 0,
            votes: 0,
            slaveDelay: 900
        }
    ]
};
var msg = rs.initiate(config);
printjson(msg);

// Initialize RS: "sd3"
connect("192.168.1.101:20002/admin");
var config = {
    _id: "sd3",
    members: [
        {
            _id: 0,
            host: "192.168.1.101:20002",
            priority: 1.0
        },
        {
            _id: 1,
            host: "192.168.1.102:20002",
            priority: 0.5
        },
        {
            _id: 2,
            host: "192.168.1.100:20002",
            hidden: true,
            priority: 0,
            votes: 0,
            slaveDelay: 900
        }
    ]
};
var msg = rs.initiate(config);
printjson(msg);

// Initialize RS: "configReplSet"
connect("192.168.1.102:20003/admin");
var config = {
    _id: "configReplSet",
    configsvr: true,
    members: [
        { _id: 0, host: "192.168.1.102:20003" },
        { _id: 1, host: "192.168.1.100:20003" },
        { _id: 2, host: "192.168.1.101:20003" }
    ]
};
var msg = rs.initiate(config);
printjson(msg);