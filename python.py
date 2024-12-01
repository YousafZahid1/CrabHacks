import random

# Predefined stock data (symbols and their prices)
stock_data = {
    'AAPL': 175.43,
    'GOOGL': 144.78,
    'MSFT': 331.18,
    'TSLA': 244.87,
    'AMZN': 134.39,
    'BTC': 37350.12,
    'ETH': 2500.67,
    'DOGE': 0.075,
    'BCH': 220.35,
    'SOL': 35.10,
    'LTC': 68.25
}

# Function to select 4 random stocks (simulating AI behavior)
def ai_stock_selector(stock_data):
    # Randomly shuffle the list of stocks and pick 4
    selected_stocks = random.sample(stock_data.items(), 4)
    
    # Print out selected stocks and their prices
    print("AI-selected stocks with prices:")
    for symbol, price in selected_stocks:
        print(f"Symbol: {symbol}, Price: ${price:.2f}")

# Calling the function
ai_stock_selector(stock_data)
