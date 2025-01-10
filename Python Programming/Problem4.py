'''Sarah has a fixed monthly income and needs to manage her expences for rent,groceries,utilities, 
   and Entertainment.she also wants to calculate her savings after all expenses'''

income=float(input("Enter your income:"))
rent=float(input("Enter your rent:"))
groceries=float(input("Enter your groceries:"))
utilities=float(input("Enter your utilities:"))
entertainment=float(input("Enter your entertainment:"))
# Calculating total expenses
total_expenses=rent+groceries+utilities+entertainment
# Calculating savings
savings = income - total_expenses
print("Your savings is :",savings)