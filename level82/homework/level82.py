#1.

name = "alexande"
print(type(name)) 


#2.
fruits = ["apple", "banana", "orande"]
print(fruits[1])  


#3.
student = {
    "name": "გიორგი",
    "age": 16,
    "grade": 10
}
print(student["grade"])  


#4.

colors = ("წითელი", "მწვანე", "ლურჯი")
try:
    colors[0] = "ყვითელი"
except TypeError as e:
    print(f"შეცდომა: {e}")


#5.

set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2        
intersection = set1 & set2 

print("გაერთიანება:", union)      
print("გადაკვეთა:", intersection)     



