
/**

 * Find the Longest Word in a String 

 * 在句子中找出最长的单词，并返回它的长度。

 */

 var longest = function(str){
    var arrStr = str.split(" ");
    var arrLen=[];
   for(var i = 0;i<arrStr.length;i++){
        arrLen.push(arrStr[i].length);
   }
    return Math.max.apply(Math,arrLen);
 }

 var l = longest('Never gonna know if you never even try');
 console.log(l);