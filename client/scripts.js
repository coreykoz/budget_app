const url = "http://192.168.1.253:8080/personalbudget";


//data structure
//let data = {'name': name, 'type': type, 'category': category, 'date': date, 'amount': amt, 'id': id};
//let data_budget = {'budget_name': name, 'amount': amt, 'id': id};

async function postData(url, data) {
    const resp = await fetch(url,
                             {
                                 method: 'POST',
                                 mode: 'cors',
                                 cache: 'no-cache',
                                 credentials: 'same-origin',
                                 headers: {
                                     'Content-Type': 'application/json'
                                 },
                                 redirect: 'follow',
                                 body: JSON.stringify(data)
                             });
    return resp;
}


//Creates 
async function createIncome(){
    let name = document.getElementById("incomeName").value;
    let type = "Income";
    let category = document.getElementById("incomeCategory").value;
    let date = document.getElementById("incomeDate").value;
    let amt = document.getElementById("incomeTotal").value;
    let id = "Transaction";

    //Verify none of the fields are empty
    if (name == "" || amt == "" || date == "" || category == "")
        return;
    
    let data = {'name': name, 'type': type, 'category': category, 'date': date, 'amount': amt, 'id': id};

    const newURL = url + "/createTransaction"; 
    const response = await postData(newURL, data);
    const j = await response.json();
}

async function createExpense(){
    let name = document.getElementById("expenseName").value;
    let type = "Expense";
    let category = document.getElementById("expenseCategory").value;
    let date = document.getElementById("expenseDate").value;
    let amt = document.getElementById("expenseTotal").value;
    let id = "Transaction";

    //Verify none of the fields are empty
    if (name == "" || amt == "" || date == "" || category == "")
        return;
    
    let data = {'name': name, 'type': type, 'category': category, 'date': date, 'amount': amt, 'id': id};

    const newURL = url + "/createTransaction"; 
    const response = await postData(newURL, data);
    const j = await response.json();
}

async function createBudget(){
    let name = document.getElementById("budgetCategory").value;
    let amt = document.getElementById("budgetTotal").value;
    let id = "Budget";

    if (name == "" || amt == "")
        return;

    let data = data_budget = {'budget_name': name, 'amount': amt, 'id': id};
    const newURL = url + "/createTransaction"; 
    const response = await postData(newURL, data);
    const j = await response.json();
}


//Reads
async function readTransactions(){
    let id = "Transaction";
    const newURL = url + "/readTransaction"; 
    const response = await postData(newURL, id);
    const j = await response.json();
    if (j) {
        return j;
	} else {
	    return "Error: Could not read";
    }
}

async function readBudgets(){
    let id = "Budget";
    const newURL = url + "/readTransaction"; 
    const response = await postData(newURL, id);
    const j = await response.json();
    if (j) {
        return j;
	} else {
	    return "Error: Could not read";
    }
}


//Updates
async function updateTransaction(){
    let name = document.getElementById("").value;
    let type = document.getElementById("").value;
    let category = document.getElementById("").value;
    let date = document.getElementById("").value;
    let amt = document.getElementById("").value;
    let id = document.getElementById("").value;

    if (name == "" || amt == "" || date == "" || category == "" || type == "" || id == "")
        return;

    let data = {'name': name, 'type': type, 'category': category, 'date': date, 'amount': amt, 'id': id};

    const newURL = url + "/updateTransaction"; 
    const response = await postData(newURL, data);
    const j = await response.json();
}

async function updateBudget(){
    let name = document.getElementById("").value;
    let amt = document.getElementById("").value;
    let id = document.getElementById("").value;

    if (name == "" || amt == "" || id == "")
        return;

    let data = data_budget = {'budget_name': name, 'amount': amt, 'id': id};
    const newURL = url + "/updateTransaction"; 
    const response = await postData(newURL, data);
    const j = await response.json();
}


//Deletes
async function deleteTransaction(){
    let name = document.getElementById("").value;
    let type = document.getElementById("").value;
    let category = document.getElementById("").value;
    let date = document.getElementById("").value;
    let amt = document.getElementById("").value;
    let id = document.getElementById("").value;

    if (name == "" || amt == "" || date == "" || category == "" || type == "" || id == "")
        return;

    let data = {'name': name, 'type': type, 'category': category, 'date': date, 'amount': amt, 'id': id};

    const newURL = url + "/deleteTransaction"; 
    const response = await postData(newURL, data);
    const j = await response.json();
}

async function deleteBudget(){
    let name = document.getElementById("").value;
    let amt = document.getElementById("").value;
    let id = document.getElementById("").value;

    if (name == "" || amt == "" || id == "")
        return;

    let data = data_budget = {'budget_name': name, 'amount': amt, 'id': id};
    const newURL = url + "/deleteTransaction"; 
    const response = await postData(newURL, data);
    const j = await response.json();
}