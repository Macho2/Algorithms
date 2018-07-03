function array(arr){
   arr.sort(compare);
  for(var i =0;i<arr.length;i++){
      if(arr[i]==arr[i+1]){
          arr.splice(i,1);
          i--;

      }
  }
  for(var i = 0;i<arr.length;i++){
      for(var j = i+1;j<arr.length;j++){
          console.log([arr[i],arr[j]]);
      }
  }
 
}

function compare(x,y){
    return x-y;
}
array([2,3,1,1,1,1,2,3,4]);
