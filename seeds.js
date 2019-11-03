// give basic info for testing

const dbConnection = require('./data/connection');
const data = require('./data/');
const users = data.users;
const perfume = data.perfume;

const main = async () => {
    const db = await dbConnection();
    await users.create("Don't ask me how the weather is up here","5db2191ce28a4f5a3a74e27e","2")
    await perfume.create()


    
    console.log('Done seeding database');
    await db.serverConfig.close();
  };

main().catch(console.log);
