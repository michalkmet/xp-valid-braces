# Notes

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

validBraces

- ✅ DONE '"()" should return true'
- ✅ DONE '"([)]" should return false'
- ✅ DONE '"{}" should return true'
- ✅ DONE '"[{]}" should return false'
- ✅ DONE "()}" should return false'
- ✅ DONE "([{]})" should return false'
- ✅ DONE "([{}])" should return true'
- ✅ DONE "(){}[]" should return true
- ✅ DONE "}" should return false
- ✅ DONE "[[[[{(({[]}))}]]]]" should return true
- ✅ "(((({{" should return false
- ✅ ")))}" should return false

if current char is LEFT => append to array
else => check if pair is correct with last array value
- pop the value from brackets arr when brackets match

if arr length > 0 => false