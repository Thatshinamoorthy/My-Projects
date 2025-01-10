'''A store keeps track of the prices of all items in a system using a multi-digit numeric code, 
where each digit represents the price of a specific item. The store manager wants to find out 
the minimum price of an item in the list of prices for inventory purposes. Write a program 
that takes input of a multi-digit number representing item prices. Finds and displays the 
minimum digit (price) from the list.'''

'''def find_min_price(prices):
    # Convert the input to a string to iterate over each digit
    price_str = str(prices)
    
    # Initialize min_price to a high value
    min_price = float('inf')
    
    # Iterate through each character in the string
    for char in price_str:
        # Convert the character back to an integer
        digit = int(char)
        
        # Update min_price if the current digit is smaller
        if digit < min_price:
            min_price = digit
            
    return min_price

# Input: multi-digit number representing item prices
prices = input("Enter the multi-digit number representing item prices: ")

# Find and display the minimum price
min_price = find_min_price(prices)
print("The minimum price is:", min_price)'''

prices=(input("Enetr the prices :"))
def find_min(prices):
    min_value=0
    for price in prices:
        if  price<min_value:
            min_value=price
        elif  price==min_value:
            print("Minimum value is 0")
    print("minimum value is ",min_value)

find_min(prices)



