
const mongoCollections = require("../config/mongoCollections");
var perfume = mongoCollections.perfume;

async function create(name,companyName,introduction) {
    // all the parameter should be check in routing
    
    const perfumeCollection = await perfume();
    let newPerfume = {
        name: name,
        picture: [],
        companyName: companyName,
        size:[],
        introduction:introduction,
        link:[],
        rating:[],
        tags:[]
    };
    const insertInfo = await perfumeCollection.insertOne(newPerfume);
    if (insertInfo.insertedCount === 0) {
        throw "Could not add animals";
    }
    const newId = String(insertInfo.insertedId);
    const newPerfumeData = await this.get(newId);
    return newPerfumeData;
}

async function insertSize(perfumeID,newSize){
    const perfumeCollection = await perfume();
    const { ObjectId } = require('mongodb');

    const objId = ObjectId.createFromHexString(String(perfumeID))


    const updatedAnimal = {
        $addToSet: {
            size: {
                $each:[newSize]
            }
        }
    }

    await perfumeCollection.updateOne({ _id: objId }, updatedAnimal);


    return await this.get(objId);
}
async function insertLink(perfumeID,newLink){
    const perfumeCollection = await perfume();
    const { ObjectId } = require('mongodb');

    const objId = ObjectId.createFromHexString(String(perfumeID))


    const updatedAnimal = {
        $addToSet: {
            link: {
                $each:[newLink]
            }
        }
    }

    await perfumeCollection.updateOne({ _id: objId }, updatedAnimal);


    return await this.get(objId);
}



async function getAll(){
    const perfumeCollection = await perfume();
    return await perfumeCollection.find({}).toArray();
}


async function get(id){
    const perfumeCollection = await perfume();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(String(id))
    const perfumeD = await perfumeCollection.findOne({ _id: objId });
   
    if (perfumeD === null) {
      throw "No perfume with that id"
    }
    return perfumeD;
}




module.exports.create = create
module.exports.getAll = getAll
module.exports.insertSize = insertSize
module.exports.insertLink = insertLink
module.exports.get = get