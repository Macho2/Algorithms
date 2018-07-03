/**

 * Where do I belong

 * 先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引

 * 举例：where([1,2,3,4], 1.5) 应该返回 1。因为1.5插入到数组[1,2,3,4]后变成[1,1.5,2,3,4]，而1.5对应的索引值就是1

 * 同理，where([20,3,5], 19) 应该返回 2。因为数组会先排序为 [3,5,20]，19插入到数组[3,5,20]后变成[3,5,19,20]，而19对应的索引值就是2

 */
var where = function(arr,num){
    arr.push(num);
    arr.sort(function(item1,item2){
        return item1-item2;
    });
    var index = arr.indexOf(num);
    return index;
}
var index = where([1,2,3,4], 1.5)
console.log(index);