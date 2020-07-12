let http = require('http');
let url = require('url');
let express = require('express');

export class Server {

    database;

    // Server stuff: use express instead of http.createServer
    server = express();
    port = 8080;
    router = express.Router();
    
    constructor(db_name) {
        this.database = db_name;
        // from https://enable-cors.org/server_expressjs.html
        this.router.use((request, response, next) => {
            response.header('Content-Type','application/json');
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Headers', '*');
            next();
        }); 

        this.server.use('/', express.static('./client'));

        this.server.use(express.json());

        //Add CRUD Functionality
	    this.router.post('/createTransaction', this.createTransactionHandler.bind(this));

	    this.router.post('/readTransaction', this.readTransactionHandler.bind(this));

	    this.router.post('/updateTransaction', this.updateTransactionHandler.bind(this));

	    this.router.post('/deleteTransaction', this.deleteTransactionHandler.bind(this));

	    this.router.post('*', async (request, response) => {
	        response.send(JSON.stringify({ "result" : "command-not-found" }));
        });
        this.server.use('/personalbudget', this.router);

    }

    async createTransactionHandler(request, response){
        //Put object into database
		await this.database.put();
		response.write(JSON.stringify({'result' : 'created',
					       'transaction' : request.body.income_name
					       }));
		response.end();
    }
    
    async readTransactionHandler(request, response){
        //Get object from database
		let list = await this.database.get(request.body.id);
		response.write(JSON.stringify(list));
		response.end();
    }
    
    async updateTransactionHandler(request, response){
        //Put object into database, deal with modification via DB code
		await this.database.put(request.body.monthly_expense, request.body.monthly_cost, "unused", "unused", "unused", request.body.id);
		response.write(JSON.stringify({'result' : 'updated',
				       'name' : request.body.monthly_expense}));
		response.end();
    }
    
    async deleteTransactionHandler(request, response){
        //Delete object from database
		await this.database.del();
		response.write(JSON.stringify({'result' : 'deleted',
					       'value'  : request.body.expense_name }));
		response.end();
	}

    listen(port){
        this.server.listen(port);
    }

}