'''Tom receives a weeekly allowance and needs to manage his expenses for snacks, transportation,and 
entertainment.he also wants to calculate his savings after all expenses'''

allowance=int(input("Enetr your allowance:"))
snack=int(input("Enter your snack expenses:"))
transportation=int(input("Enter your transportation expenses:"))
entertainment=int(input("Enter your entertainment expenses:"))
savings=allowance-(snack+transportation+entertainment)
print("Your savings is :",savings)