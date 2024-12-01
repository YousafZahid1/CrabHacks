// (function() {
//   "use strict"; // Start of use strict

//   var mainNav = document.querySelector('#mainNav');

//   if (mainNav) {

//     var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
//     if (navbarCollapse) {

//       var collapse = new bootstrap.Collapse(navbarCollapse, {
//         toggle: false
//       });
      
//       var navbarItems = navbarCollapse.querySelectorAll('a');
      
//       // Closes responsive menu when a scroll trigger link is clicked
//       for (var item of navbarItems) {
//         item.addEventListener('click', function (event) {
//           collapse.hide();
//         });
//       }
//     }

//     // Collapse Navbar
//     var collapseNavbar = function() {

//       var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

//       if (scrollTop > 100) {
//         mainNav.classList.add("navbar-shrink");
//       } else {
//         mainNav.classList.remove("navbar-shrink");
//       }
//     };
//     // Collapse now if page is not at top
//     collapseNavbar();
//     // Collapse the navbar when page is scrolled
//     document.addEventListener("scroll", collapseNavbar);
//   }

// })(); // End of use strict


document.addEventListener('DOMContentLoaded', function () {
  const expenseForm = document.getElementById('expenseForm');
  const expenseList = document.getElementById('expenseList');
  const totalExpenses = document.getElementById('totalExpenses');
  const selectedDateElement = document.getElementById('selectedDate');
  const pieChartCanvas = document.getElementById('expensePieChart');
  const ctx = pieChartCanvas.getContext('2d');
  let total = 0;
  let expensesData = {};

  flatpickr("#expenseDate", {
      dateFormat: "Y-m-d",
      onChange: function(selectedDates, dateStr) {
          const selectedDate = new Date(dateStr);
          const formattedDate = selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
          selectedDateElement.textContent = formattedDate;
          updateExpenseList(dateStr);
          updatePieChart();  // Update pie chart when date changes
          
      }
  });

  expenseForm.addEventListener('submit', function (event) {
      // ... (your existing code)

      // Update the pie chart after adding an expense
      updatePieChart();
  });

  function updateExpenseList(date) {
      // ... (your existing code)
  }

  function updatePieChart() {
      // Extract data for the pie chart from expensesData
      const labels = Object.keys(expensesData[selectedDate] || {});
      const data = labels.map(category => expensesData[selectedDate][category]);

      // Create the pie chart
      new Chart(ctx, {
          type: 'pie',
          data: {
              labels: labels,
              datasets: [{
                  data: data,
                  backgroundColor: [
                      'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'grey', 'cyan'
                  ],
              }],
          },
      });
  }

  // Initialize pie chart
  updatePieChart();
});
