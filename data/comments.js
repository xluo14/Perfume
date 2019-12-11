
const mongoCollections = require("../config/mongoCollections");
var comments = mongoCollections.comments;


async function create(rate,text) {
    // all the parameter should be check in routing
    
    const commentsCollection = await comments();
    let newComment = {
        rate: rate,
        text:text
    };
    const insertInfo = await commentsCollection.insertOne(newComment);
    if (insertInfo.insertedCount === 0) {
        throw "Could not add comments";
    }
    const newId = String(insertInfo.insertedId);
    const newPerfumeData = await this.get(newId);
    return newPerfumeData;
}






async function getAll(){
    const commentsCollection = await comments();
    return await commentsCollection.find({}).toArray();
}

//user 不会直接输入id, 只能根据用户名和密码来查找，储存在database里的密码已经hash过了，查找的时候需要bcrypt进行比较
async function get(id){
    const commentsCollection = await comments();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(String(id))
    const comment = await commentsCollection.findOne({ _id: objId });
   
    if (comment === null) {
      throw "No user with that id"
    }
    return comment;
}

// update needed




module.exports.create = create
module.exports.getAll = getAll
module.exports.get = get

