document.addEventListener('DOMContentLoaded', function () {
    const sp500Companies = [
        { symbol: 'AAPL', name: 'Apple Inc.' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.' },
        { symbol: 'NVDA', name: 'Nvidia Inc.' },
        { symbol: 'AMZN', name: 'AMAZON Inc.' },
        { symbol: 'META', name: 'Meta platforms Inc.' },
        { symbol: 'BRK.B', name: 'Berkshire Hathways INC.' },
        { symbol: 'LLY', name: 'Eli Lilly & Co.' },
        { symbol: 'TSLA', name: 'Tesla Inc.' },
        { symbol: 'HD', name: 'Home Depot Inc.' },
        { symbol: 'NFLX', name: 'Netflix Inc.' },
        { symbol: 'WMT', name: 'Walmart Inc.' },
        { symbol: 'UBER', name: 'Uber technologies  Inc.' },
        { symbol: 'PFE', name: 'Pfizer Inc.' },
        { symbol: 'NKE', name: 'Nike Inc.' },
        { symbol: 'CMCSA', name: 'Comcast Inc.' },
        { symbol: 'SBUX', name: ' Starbucks corps.' },
    ];
 
 
    function generateRandomStock() {
        const randomIndex = Math.floor(Math.random() * sp500Companies.length);
        const company = sp500Companies[randomIndex];
 
 
        return {
            symbol: company.symbol,
            name: company.name,
            price: (Math.random() * 1000).toFixed(2),
        };
    }
 
 
    function generateAndDisplayStocks() {
        const stockListElement = document.getElementById('stockList');
        stockListElement.innerHTML = '';
 
 
        for (let i = 0; i < 10; i++) {
            const newStock = generateRandomStock();
 
 
            const stockElement = document.createElement('div');
            stockElement.classList.add('stock');
 
 
            const stockInfo = document.createElement('p');
            stockInfo.textContent = `${newStock.symbol}: ${newStock.name} - Price: $${newStock.price}`;
 
 
            stockElement.appendChild(stockInfo);
            stockListElement.appendChild(stockElement);
        }
    }
 
 
    generateAndDisplayStocks();
 
 
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateAndDisplayStocks);
 });
 