const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

// let db;
async function connectToDatabase(){
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri, {dbName: "testDb"});

    console.log(`Connected to in-memory DB ${uri}`);
}
  
module.exports = connectToDatabase;
