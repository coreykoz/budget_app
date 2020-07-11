//canvas for the graphs
const ctx = (document.getElementById('monthySpending'));

//Money formatter
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

//Draw Monthly Spending Pie Chart
function drawMonthlyPieChart(){
    //let array = await readExpense();
    const currDate = new Date(); // gets the current date as a string
    const currMonth = currDate.getMonth();
    
    let groceryTotal = 0;
    let transportTotal= 0;
    let entertainmentTotal= 0;
    let loanTotal= 0;
    let shoppingTotal= 0;
    let billTotal= 0;
    let dineTotal= 0;

    /*
    for(let i = 0; i < array.length; i++){
        if(new Date(array[i].date.replace(/-/g, '/')).getMonth() == currMonth){ 
            //get category and price
            if(array[i].category == "Grocery"){
                groceryTotal += parseFloat(array[i].expense_total);
            }
            else if(array[i].category == "Transportation & Gas"){
                transportTotal += parseFloat(array[i].expense_total);
            }
            else if(array[i].category == "Entertainment"){
                entertainmentTotal += parseFloat(array[i].expense_total);
            }
            else if(array[i].category == "Loans & Other Payments"){
                loanTotal += parseFloat(array[i].expense_total);
            }
            else if(array[i].category == "Shopping"){
                shoppingTotal += parseFloat(array[i].expense_total);
            }
            else if(array[i].category == "Bills & Insurance"){
                billTotal += parseFloat(array[i].expense_total);
            }
            else if(array[i].category == "Restaurant & Dining"){
                dineTotal += parseFloat(array[i].expense_total);
            }
            else{
    
            }
        }
    }*/
    let allCategory  = [["Grocery",groceryTotal], ["Transportation & Gas", transportTotal], ["Entertainment", entertainmentTotal], ["Loans & Other Payments", loanTotal], ["Shopping", shoppingTotal], ["Bills & Insurance", billTotal], ["Restaurant & Dining", dineTotal]];
        //display this array
        
    var pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Grocery', 'Transportation & Gas', 'Entertainment', 'Loans & Other Payments', 'Shopping', 'Bills & Insurance', 'Restaurant & Dining'],
                datasets: [{
                    label: 'Spending by Category',
                    data: [groceryTotal, transportTotal, entertainmentTotal, loanTotal, shoppingTotal, billTotal, dineTotal],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(196, 249, 143, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(196, 249, 143, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
    });

    
}