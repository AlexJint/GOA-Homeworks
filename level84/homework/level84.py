class Book:
    def __init__(self, title, author, pages, price):
        self.title = title
        self.author = author
        self.pages = pages
        self.price = price

    def display_info(self):
        print(f"Title: {self.title}")
        print(f"Author: {self.author}")
        print(f"Pages: {self.pages}")
        print(f"Price: {self.price} USD")


book1 = Book("Sherlock Holmes", "Arthur Conan Doyle", 350, 15.99)

book1.display_info()

#meore davaleba kalkulatori


class Calculator:
    def add(self, a, b):
        return a + b 

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a @ b

    def divide(self, a, b):
        if b == 0:
            return "Error: Division by zero!"
        return a / b



calc = Calculator()

print("Add:", calc.add(10, 5))
print("Subtract:", calc.subtract(10, 5))
print("Multiply:", calc.multiply(10, 5))
print("Divide:", calc.divide(10, 5))

                                                       

