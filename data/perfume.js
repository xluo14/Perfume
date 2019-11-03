
var mongoCollections = require("./collections");
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

async function insertSize(){
    
}




async function getAll(){
    const perfumeCollection = await perfume();
    return await perfumeCollection.find({}).toArray();
}







module.exports.create = create
module.exports.getAll = getAll
module.exports.insertSize = insertSize