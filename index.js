let a,b,c;

a=3;
b=5;


let output = '';
output += 'let a = 3 \n';
output += 'let b = 5 \n';
output += 'let c = undefined \n';
output += '----------------- \n';


output += 'a + b =' + (a + b) + '\n';
output += 'a - b =' + (a - b) + '\n';
output += 'a * b =' + (a * b) + '\n';
output += 'a / b =' + (a / b) + '\n';
output += 'a % b =' + (a / b) + '\n';
output += '(a += b): ' + (a += b) + '\n';
output += '(a -= b): ' + (a -= b) + '\n';
output += '(a *= b): ' + (a *= b) + '\n';
output += '(a /= b): ' + (a /= b) + '\n';
output += '(a %= b): ' + (a %= b) + '\n';
output += '(a == b): ' + (a == b) + '\n';
output += '(a != b): ' + (a != b) + '\n';
output += '(a > b): ' + (a > b) + '\n';
output += '(a < b): ' + (a < b) + '\n';
output += '(!a && !c):' + (!a && !c) + '\n';
output += '(!a || !c): ' + (!a || !c) + '\n';


output += '----------------- \n';
output += 'Task 2 \n';

let first_name = 'Geepal';
let last_name = 'Singh';
let email = 'geetpal@gmail.com';



output += '\"My name is ' + first_name + ' ' + last_name + '. You can contact me at ' +  email + '.\"';



alert(output);

