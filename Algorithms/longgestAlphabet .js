//统计字符串，例如”aaaabbbccccddfgh”中出现次数最多的字母及出现的次数。//

function longgetAlp(str){
   
    var obj={};
    var arr=[];
    for(var i = 0;i < str.length;i++){
        if(!obj[str[i]]){
            obj[str[i]]=1
        }else{
            obj[str[i]] += 1;
        }
    }
    console.log(obj);
   

    var max = Math.max.apply(Math,Object.values(obj))
   for(var pro in obj){
    if(obj[pro] == max){
        arr.push(pro);
    }
   }
   console.log(arr,max);
}

longgetAlp('abacadeeefe');