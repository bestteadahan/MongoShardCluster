db.getSiblingDB('admin');
db.createUser(
    {
        user: "itdev",
        pwd : "itdev",
        roles : [
            { role: "readWrite", db: "rcvs" },
            { role: "readWriteAnyDatabase", db: "admin" }
        ]
    },
    {
        user: "graphql",
        pwd : "graphql",
        roles : [
            { role: "read", db: "rcvs" },
            { role: "readAnyDatabase", db: "admin" }
        ]
    }
);
db.getSiblingDB('rcvs');
db.createUser(
    {
        user: "itdev",
        pwd: "itdev",
        roles: [
            { role: "readWrite", db: "rcvs" }
        ]
    },
    {
        user: "graphql",
        pwd: "graphql",
        roles: [
            { role: "read", db: "rcvs" }
        ]
    }
);
// db.getSiblingDB('refs');
// db.createUser(
//     {
//         user: "itdev",
//         pwd: "itdev",
//         roles: [{ role: "readWrite", db: "rcvs" }]
//     },
//     {
//         user: "graphql",
//         pwd: "graphql",
//         roles: [{ role: "read", db: "rcvs" }]
//     }
// );