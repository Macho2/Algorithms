/**

 * Check for Palindromes

 * 如果给定的字符串是回文，返回true，反之，返回false

 * 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)

 * 注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

 * 函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。

 */
var palindromes=function(str){
    var str = str.replace(/\W/g,'').toLowerCase();
    var str2 = str.split('').reverse().join('');
    return str === str2;
};

console.log(palindromes("we will lliw ew "));