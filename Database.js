export class Database {

	MongoClient = require('mongodb').MongoClient;
    uri;
    client;
    collectionName;
    dbName = "corey_finances";

    constructor(collectionName) {
	this.collectionName = collectionName;
	
	let secrets;
    let password;
    if (!process.env.PASSWORD) {
    	secrets = require('./pin.json');
    	password = secrets.password;
    } else {
        password = process.env.PASSWORD;
    }
    this.uri = password;
    this.client = new this.MongoClient(this.uri, { useNewUrlParser: true });
	// Open up a connection to the client.
	// Open up a connection to the client.
	// The connection is asynchronous, but we can't call await directly
	// in the constructor, which cannot be async. So, we use "IIFE". Explanation below.
	
	/* from https://anthonychu.ca/post/async-await-typescript-nodejs/

	  Async/Await and the Async IIFE

	  The await keyword can only be used inside of a function
	  marked with the async keyword. [...] One way to do this is
	  with an "async IIFE" (immediately invoked function
	  expression)...

	   (async () => {
	   // code goes here
	   })();

	*/
	(async () => {
	    await this.client.connect().catch(err => { console.log(err); });
	})();
    }
	
    async put(){
	    let db = this.client.db(this.dbName);
	    let collection = db.collection(this.collectionName);

		var result = await collection.updateOne({'monthly_expense': name, 'id': id}, { $set : { 'monthly_cost' : total} }, { 'upsert' : true });
	}

    async get(){
		let db = this.client.db(this.dbName); // this.level(this.dbFile);
		let collection = db.collection(this.collectionName);
		let result = await collection.find({'id': id}).toArray();
		if (result) {
		    return result;
		} else {
		    return null;
		}
    }

    async del(name, id) {
	    let db = this.client.db(this.dbName);
	    let collection = db.collection(this.collectionName);

	    var result = await collection.deleteOne({'monthly_expense' : name});
	}
}
