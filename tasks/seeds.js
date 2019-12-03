// give basic info for testing

const dbConnection = require("../config/mongoCollections");
const data = require('../data');
const users = data.users;
const perfume = data.perfume;

const main = async () => {
    const db = await dbConnection();
    //await users.create("Tian","ntian1@stevens.edu","M","22","123456","T")
    //await perfume.create("Tian","Tian","good man")

    await perfume.insertSize("5dcb3b6b85d3eb356885be3c","32oz")
    await perfume.insertLink("5dcb3b6b85d3eb356885be3c","google.com")
    const test = await perfume.get("5dcb3b6b85d3eb356885be3c")
    //const userData = await users.getAll()
    //const perfumeData = await users.getAll()


    //console.log(userData[0]);
    
    console.log(test['link']);
    
    console.log('Done seeding database');


    await db.serverConfig.close();
  };

main().catch(console.log);
