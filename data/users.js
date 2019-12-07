
const mongoCollections = require("../config/mongoCollections");
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

//user 不会直接输入id, 只能根据用户名和密码来查找，储存在database里的密码已经hash过了，查找的时候需要bcrypt进行比较
async function get(id){
    const usersCollection = await users();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(String(id))
    const user = await usersCollection.findOne({ _id: objId });
   
    if (user === null) {
      throw "No user with that id"
    }
    return user;
}






module.exports.create = create
module.exports.getAll = getAll
module.exports.get = get