
var mongoCollections = require("./collections");
var users = mongoCollections.users;
// create user
async function create(userName, Email,Gender,Age,hashedPassword,ifAdmin) {
    //all the parameter should be check in routing
    const usersCollection = await users();
    let newUsers = {
        userName: userName,
        Email: Email,
        Gender: Gender,
        Age: Age,
        hashedPassword:hashedPassword,
        ifAdmin:ifAdmin
    };
    const insertInfo = await usersCollection.insertOne(newUsers);
    if (insertInfo.insertedCount === 0) {
        throw "Could not add animals";
    }
    const newId = String(insertInfo.insertedId);
    const user = await this.get(newId);
    return user;
}

async function getAll(){
    const usersCollection = await users();
    return await usersCollection.find({}).toArray();
}








module.exports.create = create
module.exports.getAll = getAll