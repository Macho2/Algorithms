/**

 * Confirm the Ending 

 * 检查字符串结尾

 * 判断一个字符串(str)是否以指定的字符串(target)结尾。

 * 如果是，返回true;如果不是，返回false。

 */
var confirmEnding=function(str,target){
   str = str.slice(str.length-target.length);
   if(str == target){
       return true;
   }else{
       return false;
   }
}

console.log(confirmEnding("we will rock","rock"));
console.log(confirmEnding("we will rock","rocc"));
