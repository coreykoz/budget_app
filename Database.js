const {Mongo} = require('mongodb');
class Database {

    constructor(collectionName) {
        this.MongoClient =  = new Mongo(uri);
	    this.collectionName = collectionName;
        this.dbName = "corey_finances";

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
	
    async put(name, type, category, date, amt, id){
	    let db = this.client.db(this.dbName);
	    let collection = db.collection(this.collectionName);

        if(id == "Budget"){
            var result = await collection.updateOne({'budget_name': name, 'amount': amt, 'id': id}, { $set : { 'amount' : amt} }, { 'upsert' : true });
        } else {
            var result = await collection.updateOne({'name': name, 'type': type, 'category': category, 'date': date, 'amount': amt, 'id':id}, { $set : { 'amount' : amt} }, { 'upsert' : true });
        }
	}

    async get(id){
		let db = this.client.db(this.dbName);
        let collection = db.collection(this.collectionName);
        
		let result = await collection.find({'id': id}).toArray();
		if (result) {
		    return result;
		} else {
		    return null;
		}
    }

    async del(name, type, category, date, amt, id) {
	    let db = this.client.db(this.dbName);
	    let collection = db.collection(this.collectionName);
		
		if (id == "Budget"){
			var result = await collection.deleteOne({'budget_name': name, 'amount': amt, 'id': id});
		} else{
			var result = await collection.deleteOne({'name': name, 'type': type, 'category': category, 'date': date, 'amount': amt, 'id': id});
		}
	}
}
