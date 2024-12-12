from turtle import *

#we want to paint a house


#step 1: draw a square


width(5)
color("blue")
speed(20)

forward(300)
left(90)

forward(300)
left(90)

forward(300)
left(90)

forward(300)
left(90)

#door bang
forward(115)
color("yellow")
begin_fill()
left(90)
forward(150)
right(90)
forward(75)
right(90)
forward(150)
end_fill()

#now we will add some windows
penup()
goto(50, 180)
pendown()
color("brown")
begin_fill()
left(180)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)

#another window maybe :)))

penup()
goto(250, 180)
pendown()
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()

#now its time for the roof 
penup()
goto(300, 300)
pendown()
color("red")
begin_fill()
right(150)
forward(300)
left(120)
forward(300)
end_fill()

#lets add welcome barier
penup()
goto(100, -30)
pendown()
width(3)
color("gray")
begin_fill()
left(30)
forward(50)
left(90)
forward(100)
left(90)
forward(50)
left(90)
forward(100)
end_fill()

#lets edit windowns make it better you know
width(5)
penup()
goto(50, 200)
pendown()
color("black")
left(180)
forward(40)
penup()
goto(70,220)
pendown()
right(90)
forward(40)

#lets edit second window
penup()
goto(250, 200)
pendown()
right(90)
forward(40)
penup()
goto(230, 220)
pendown()
left(90)
forward(40)

penup()
goto(-120, 0)
pendown()

#lets paint garage
begin_fill()
color("gray")
right(180)
forward(250)
left(90)
forward(300)
left(90)
forward(250)
left(90)
penup()
goto(-120, 0)
pendown()
left(180)
forward(300)
end_fill()

#lets add lightbulb inside house
penup()
goto(160, 298)
pendown()
left(90)
color("black")
forward(10)
penup()
begin_fill()
goto(150,  278)
pendown()
color("yellow")
circle(10)
end_fill()


exitonclick()