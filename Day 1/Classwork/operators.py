# Arithmetic Operators:
x = 10
y = 3

addition_result = x + y  # 10 + 3 = 13
subtraction_result = x - y  # 10 - 3 = 7
multiplication_result = x * y  # 10 * 3 = 30
division_result = x / y  # 10 / 3 = 3.333...
integer_division_result = x // y  # 10 // 3 = 3
modulus_result = x % y  # 10 % 3 = 1
exponentiation_result = x ** y  # 10 ** 3 = 1000

# Comparison Operators:
a = 5
b = 7

is_equal = a == b  # False
not_equal = a != b  # True
greater_than = a > b  # False
less_than = a < b  # True
greater_than_or_equal = a >= b  # False
less_than_or_equal = a <= b  # True

# Logical Operators:
p = True
q = False

logical_and = p and q  # False
logical_or = p or q  # True
logical_not_p = not p  # False

# Assignment Operators:
x = 10

x += 5  # x is now 15
x -= 3  # x is now 12
x *= 2  # x is now 24
x /= 4  # x is now 6.0
x //= 2  # x is now 3.0 
x %= 2  # x is now 1.0
x **= 3  # x is now 1.0 (raised to the power of 3)

# Bitwise Operators (with integers in binary form):
a = 0b1100  # 12 in binary
b = 0b1010  # 10 in binary

bitwise_and = a & b  # 0b1000 (8 in binary)
bitwise_or = a | b  # 0b1110 (14 in binary)
bitwise_xor = a ^ b  # 0b0110 (6 in binary)
bitwise_not_a = ~a  # -13 (in decimal)
left_shift = a << 2  # 0b110000 (48 in binary)
right_shift = a >> 2  # 0b11 (3 in binary)

# Membership Operators:
fruits = ['apple', 'banana', 'cherry']

is_in_list = 'banana' in fruits  # True
is_not_in_list = 'orange' not in fruits  # True

# Identity Operators:
x = [1, 2, 3]
y = x

is_same_object = x is y  # True
is_not_same_object = x is not None  # True

# Ternary Operator:
age = 25

message = "You are young" if age < 30 else "You are not young"

# Other Operators:
text = "Hello, world!"
slice_result = text[0:5]  # "Hello"