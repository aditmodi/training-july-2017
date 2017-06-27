class DiffArray{
  constructor(){}
  getDifference(){
    let arr1 = [9,8,7,6,5,4,3,2,1];
    let arr2 = [1,2,3,4,5,6,7,8,9];
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
      arr3[i] = arr1[i] - arr2[i];
    }
    document.write("The new difference array : " + arr3);
  }
}

function difference(){
  let obj = new DiffArray();
  obj.getDifference();
}
