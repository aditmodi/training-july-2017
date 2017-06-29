let obj = [
  { title : "Topic 1", descr : "Welcome to Successive Softwares. Let your neurons run horizontally vertically diagonally blah blah blah." },
  { title : "Topic 2", descr : "Welcome to Successive Softwares. Let your neurons run horizontally vertically diagonally blah blah blah." },
  { title : "Topic 3", descr : "Welcome to Successive Softwares. Let your neurons run horizontally vertically diagonally blah blah blah." }
];

function init(){
  obj.forEach(function(obj){
    $('#myAccordian').append("<div class = 'topic'>"+obj.title+"<p class='content'>"+obj.descr+"</p></div>");
  })
}

$(document).ready(function(){
  $('.topic',this).click(function(){
    if($('.content',this).css('display') == 'block'){
      $('.content',this).slideUp();
      $('.content').css('display') = 'none';
    }
    else{
      $('.content').slideUp();
      $('.content',this).slideDown();
      $('.content',this).css('display','block');
    }
  });
})
