
function bubbleSort(arr) {
  if(arr.length<2) return arr;
    let numCom = arr.length-1;
    while(numCom>=1){
        for(let i = 0;i<numCom;i++){
            if(compare(arr[i],arr[i+1])){
                swap(arr,i,i+1);
            }
        }
        numCom--;
    }
  return arr;
}

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function compare(a, b) {
  if (a > b) return true;
  return false;
}
