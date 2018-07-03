
/**

 * Repeat a string repeat a string 

 * 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。

 */
var repeat=function(str,num){
    var repeatStr="";
    if(num>=0){
        for(var i = 0; i<=num;i++){
            repeatStr +=str;
        }
    }else{
        return "";
    }
    return repeatStr;
}

console.log(repeat('str',4));