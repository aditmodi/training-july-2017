class PlayWithObject{

  constructor(){
    let obj = {add : function(value1){
                      obj.items.push(value1);},
              remove : function(value2){
                      obj.items.splice(value2,1);},
              items : [2,3,5,1,6,8,4],
              length : items.length};

  }
  elementAdd(v){
    obj.add(v.value);
    console.log('called');
    document.getElementById('update').innerHTML = items;
  }
}


PlayWithObject = new PlayWithObject();
