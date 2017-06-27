function elementAdd(){
  let items = [];
  value1 = document.getElementById('num').value;
  let obj = {add : function(value1){
    obj.items.push(value1);
  }, remove : function(){  },items : [2,3,5,1,6,8,4],
  length : items.length};

  obj.add;
  document.getElementById('update').innerHTML = "Items : [" + obj.items + "]";
  document.getElementById('len').innerHTML = "Length : " + obj.length;
}

function elementRemove(){
  let items = [];
  value2 = document.getElementById('pos').value;
  let obj = {add : function(){
  }, remove : function(value2){
    obj.items.splice(value2,1);
  },items : [2,3,5,1,6,8,4],
  length : items.length};

  obj.remove;
  document.getElementById('update').innerHTML = "Items : [" + obj.items + "]";
  document.getElementById('len').innerHTML = "Length : " + obj.length;
}
