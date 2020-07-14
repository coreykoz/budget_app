'use strict';

//1: Import Server classes/DB classes
let val = require('./Database.js');
const { Database } = val;
const val2 = require('./Server.js');
let { Server } = val2;

//2: Create Server/DB objects as constants
const budget_db = new Database('corey-finances');
const budget_server = new Server(budget_db);

//3: Establish Server
theServer.listen(8080);
