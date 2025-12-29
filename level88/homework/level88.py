name = 'alex'

print(name)


information = {
    "name" : "alex" ,
    "lastname" : "jincharadze" ,
    "age" : 9 

}

print(information)


class car  : 
    def init (self , name , model , color ,year):
        self.name = name 
        self.model = model 
        self. color = color 
        self. year = year


car1 = car('BMW' , 6 , 'black' , 2023 )

print(car1.year , car1.name , car1.model , car1.color )





car2 =car("mersedes" , 7 ,"red" , 2025)

print(car2.name , car2.model,car2.color, car2.year)