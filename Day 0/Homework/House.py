from turtle import *

# We want to paint a house

# Step 1: Make a function for a square

width(7)

def square():
    color("purple")
    for i in range(4):
        forward(200)
        left(90)
# Square function done...

# step 2: Make a function for a door

def door():
    color("yellow")
    left(90)
    forward(120)
    right(90)
    forward(60)
    right(90)
    forward(120)

# Door function done...

# Step 3: Making The Roof Function:

def roof():
    right(150)
    forward(200)
    left(120)
    forward(200)
    end_fill()

# Step 4: Calling all the functions

square()
forward(70)
door()
penup()
goto(200, 200)
pendown()
color("red")
begin_fill()
roof()
end_fill()

exitonclick()