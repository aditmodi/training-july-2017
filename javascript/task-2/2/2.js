class Edit {
  constructor(){}
  eRemove(){
    let arr = [NaN,0,15,false,-22,"",undefined,47,null];
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i]) || arr[i] == true || arr[i] == false) {
        arr.splice(i,1);
      }
    }
    document.write("New array : " + arr);
  }
}

function rEmove(){
  let obj = new Edit();
  obj.eRemove();
}
