import turtle as t
import time
t.speed(0)
t.pensize(4)
t.pencolor('orange')
t.bgcolor('black')
t.begin_fill()
def arc():
    t.speed(0)
    for i in range(200):
        t.fd(1.5)
        t.rt(1)
t.lt(140)
t.fd(150)
arc()
t.lt(120)
arc()
t.fd(156)
t.fd(15)
t.rt(80)
t.fd(15)
t.fillcolor('aqua')
t.end_fill()
time.sleep(3)