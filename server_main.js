'use strict';

//1: Import Server classes/DB classes
import { Database } from './Database';
import { Server } from './Server';

//2: Create Server/DB objects as constants
const budget_db = new Database('corey-finances');
const budget_server = new Server(budget_db);

//3: Establish Server
theServer.listen(8080);
