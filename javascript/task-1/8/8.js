class SortByName{
  constructor(){  }
  compare(){
    let john = { name: "John Smith", age: 23 };
    let mary = { name: "Mary Key", age: 18 };
    let bob = { name: "Bob-small", age: 6 };
    let people=[john,mary,bob];
    // var byName = people.slice(0);
    people.sort(function(a,b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    document.write('by name:</br>');
    for (var i = 0; i < 3; i++) {
      document.write(people[i].name+"</br>");
    }
  }
}

function sort(){
  let obj=new SortByName();
  obj.compare();
}
