class book:
    def __init__(self, title, author, pages, price):
        self.title = title
        self.author = author
        self.pages = pages
        self.price = price
    def display_info(self):
        print(vars(self). values())


book1 = book("zxaprebi", "vaja fSavela", 120, 20  )

print(book1.title)
print(book1.author)
print(book1.pages)
print(book1.price)

