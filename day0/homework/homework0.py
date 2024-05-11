from turtle import *


#we want to paint o house

#step 1: drow a spuare

speed(1)
width(9)
color ("red")
forward(200)
left(90)

forward(200)
left(90)
forward(200)
left(90) 
forward(200)
left(90)


#end of square

#droewing a door
begin_fill()
forward(70)

color("blue")
left(90)

forward(120)                  #height of the door
right(90)

forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

begin_fill()

color("yellow")
right(150)
forward(200)
left(120)
forward(200)
end_fill()
penup()
goto(180, 160)
pendown()
color("blue")
right(60)
forward(30)
left(90)
forward(50)
left(90)
forward(35)
left(90)
forward(51)
left(90)

end_fill()
penup()
goto(140,160)
right(0)
forward(130)
left(90)
forward(50)
left(90)
forward(30)
left(90)
forward(50)



exitonclick()
