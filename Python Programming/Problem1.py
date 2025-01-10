'''Emma work 8 hours a day,5 days a week.we need to calculate the total hours she works 
on a year,considering she takes 2 weeks of vacation'''

work_in_day=8 #hours
work_in_week=5 #days
vacation=2 #weeks
vacation_in_hour=(2*7)*24
# Calculate the total hours worked in a year
total_hours_worked = ((work_in_day * work_in_week) * 52 ) - vacation_in_hour
# Print the result
print(total_hours_worked)  # Output