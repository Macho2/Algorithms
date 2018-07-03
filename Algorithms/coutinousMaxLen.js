// 例如 arr = [1,3,4,5,7,8]的最大连续长度就是3（从3到5）
function maxContinous(arr){
    var count=1;
    var countArr=[];
    for(var i = 0;i<arr.length;i++){
        if(arr[i+1] == arr[i]+1){
            count++;
        }else{
            countArr.push(count);
            count = 1;
        }
    }

    var num =  Math.max.apply(Math,countArr);
    console.log(num);
}

 maxContinous([1,2,3,4,5,7,8,9,10]);
