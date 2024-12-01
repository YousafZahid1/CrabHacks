document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    const totalExpenses = document.getElementById('totalExpenses');
    let total = 0;
    let expensesData = {};

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const expenseCategory = document.getElementById('expenseCategory').value;
        const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

        if (isNaN(expenseAmount)) {
            alert('Please enter a valid amount.');
            return;
        }

        // Initialize category in data if not exists
        if (!expensesData[expenseCategory]) {
            expensesData[expenseCategory] = 0;
        }

        // Add expense to list
        const expenseItem = document.createElement('li');
        expenseItem.textContent = `${expenseCategory}: $${expenseAmount.toFixed(2)}`;
        expenseList.appendChild(expenseItem);

        // Add expense amount to total and respective category
        total += expenseAmount;
        expensesData[expenseCategory] += expenseAmount;
        totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;

        // Clear input field
        document.getElementById('expenseAmount').value = '';

        // Update pie chart
        updatePieChart();
    });

    // Function to update the pie chart
    function updatePieChart() {
        const pieChartCanvas = document.getElementById('pieChart');
        const ctx = pieChartCanvas.getContext('2d');

        // Clear previous chart instance
        if (window.myPieChart) {
            window.myPieChart.destroy();
        }

        // Data for the chart
        const labels = Object.keys(expensesData);
        const data = Object.values(expensesData);

        // Colors for the chart
        const backgroundColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9966', '#66FF66', '#FF6666', '#6666FF', '#66FFCC'];
        const hoverBackgroundColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9966', '#66FF66', '#FF6666', '#6666FF', '#66FFCC'];
        const categories = ['Rent', 'Food', 'Transportation', 'Utilities', 'Subscription', 'Personal expenses', 'Savings, investment', 'Debt', 'Healthcare', 'Miscellaneous']
        var max = 0;
        var nameMax = "";
        for (i = 0; i < categories.length; i++) {
            if (expensesData[categories[i]] > max) {max = expensesData[categories[i]]; nameMax = categories[i];}
        }
        document.getElementById('topExpenses').innerHTML = "Your highest expense was " + nameMax + ", where you spent $" + max + 
        ". Consider lowering this expense to attain more savings. <br><br><b> Ways to Lower Spending:</b> <br>" +
        "Rent - Difficult, but negotiating or moving may work <br> Food - Obtain cheaper groceries, create a budget, grow foods at home <br>" +
        "Transportation - Consider public transportation, carpool, or bike <br> Utilities - Conserve resources at home and do not be wasteful <br>" +
        "Subscription - Discontinue subscriptions that are not used commonly + <br> Personal expenses - Create a budget and identify where you can hold back on spendings <br>" +
        "Debt - Do not take out unnecessary loans or use unnecessary amounts of money <br> Healthcare - Prioritize safety, have free public healthcare :) <br>"
        ;
        // Generate the pie chart
        window.myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColors,
                    hoverBackgroundColor: hoverBackgroundColors
                }]
            },
            options: {
                responsive: false
            }
        });
    }
});



