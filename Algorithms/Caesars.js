/**

 * Caesars Cipher

 * 凯撒密码，又叫移位密码

 * 移位密码也就是密码中的字母会按照指定的数量来做移位

 * 一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推

 * 写一个ROT13函数，实现输入加密字符串，输出解密字符串

 * 所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们

 */
var strArr = [];
var caesars = function(str){
    for(var i = 0;i<str.length;i++){

        if(str[i]>='A' && str[i]<='Z'){
            strArr.push(String.fromCharCode(str.charCodeAt(i)+13));
        }else{
            strArr.push(str[i]);
        }
    }

    return strArr.join('');
}

var encp = caesars('I Love You');
console.log(encp);
