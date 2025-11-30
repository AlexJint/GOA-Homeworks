print("=== I. DATA TYPES ===\n")

name = "ალექსანდრე"
print("1. სახელი:", name, "| ტიპი:", type(name))


fruits = ["ვაშლი", "ბანანი", "ფორთოხალი", "მსხალი"]
print("2. ხილის სია:", fruits)
print("   მეორე ელემენტი:", fruits[1])

student = {
    "name": "გიორგი",
    "age": 20,
    "grade": 85
}
print("3. სტუდენტის ქულა:", student["grade"])

colors = ("წითელი", "მწვანე", "ლურჯი")
print("4. ფერები:", colors)
try:
    colors[0] = "ყვითელი"          
except TypeError as e:
    print("   შეცდომა tuple-ის შეცვლისას:", e)

set1 ={1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
print("5. set1:", set1)
print("   set2:", set2)
print("   გაერთიანება (union):", set1 | set2)
print("   გადაკვეთა (intersection):", set1 & set2)


print("\n=== II. ARITHMETIC OPERATORS ===\n")


num1 = float(input("6. შეიყვანე პირველი რიცხვი: "))
num1 = float(input("6. შეიყვანე პირველი რიცხვი: "))
num2 = float(input("   შეიყვანე მეორე რიცხვი: "))

print(f"   ჯამი: {num1 + num2  + num2}")
print(f"   სხვაობა: {num1} - {num2} = {num1 - num2}")
print(f"   ნამრავლი: {num1} × {num2} = {num1 * num2}")
if num2 != 0:
    print(f"   განაყოფი: {num1} / {num2} = {num1 / num2}")
else:
    print("   განაყოფი: გაყოფ ნულზე შეუძლებელია")

