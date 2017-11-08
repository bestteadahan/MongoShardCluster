db.getSiblingDB('admin');
db.createUser(
    {
        user: "gafolio",
        pwd: "gafolio",
        roles: [
            { role: "userAdminAnyDatabase", db: "admin" },
            { role: "clusterAdmin", db: "admin" }
        ]
    }
);
var test = db.auth("gafolio","gafolio");
if (test == 1) {
    print("Create user admin successfully!");
} else {
    print("Fail to create admin!");
}