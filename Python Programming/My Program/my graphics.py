import turtle as t
import time
t.bgcolor('black')
t.pensize(4)
t.speed(0)
for i in range(300):
    t.fd(i*3)
    t.rt(91)
    t.begin_fill()
    if i<100:
        t.pencolor('green')
        
    elif 100<=i<200:
        t.pencolor('white')
        
    elif 200<=i<=300:
        t.pencolor('orangered')
       
time.sleep(3)