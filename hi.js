const axios = require('axios');
const cheerio = require('cheerio');


const url = 'https://www.slickcharts.com/sp500';


async function fetchStockData() {
 try {
   // Fetch HTML content from the specified URL
   const response = await axios.get(url);


   // Load the HTML content into Cheerio
   const $ = cheerio.load(response.data);


   // Extract relevant data using selectors
   const stockData = [];
   $('.table').find('tbody tr').each((index, element) => {
     const tds = $(element).find('td');
     const symbol = $(tds[0]).text();
     const name = $(tds[1]).text();
     const price = parseFloat($(tds[2]).text().replace('$', '').replace(',', ''));
     const change = parseFloat($(tds[3]).text().replace('%', ''));
    
     stockData.push({ symbol, name, price, change });
   });


   // Display the collected stock data
   console.log(stockData);
 } catch (error) {
   console.error('Error fetching stock data:', error.message);
 }
}


// Call the function to fetch and display stock data
fetchStockData();
