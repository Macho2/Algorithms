/** 

 * Chunky Monkey

 * 把一个数组arr按照指定的数组大小size分割成若干个数组块

 * 例如: chunk([1,2,3,4],2)=[[1,2],[3,4]];

 */
var chunk = function(arr,num){
    var newArr=[];
    var subArr1 = arr.slice(0,num);
    var subArr2 = arr.slice(num);
    newArr.push(subArr1);
    newArr.push(subArr2);
    return newArr;

}
console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 4));
