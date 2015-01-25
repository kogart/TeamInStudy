var color = "#384047";
var myHeader = $("#pageText h1");
var myText = $("#pageText p");


//N��r man trycker p� ett element i toppmenyn
$("#menu li").click(function(){

  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  
  $("#menu").css("background", color);
  $("ul li a").css("color", "white");
  $("ul li.selected a").css("color", color);
  $("h1").css("color", color);
  $("p").css("color", color);
  
  // ��ndra text p�� sidan
  myHeader.text($(this).attr("title"))
  myText.text($(this).attr("value"))

});


//N�r man trycker p� en f�rg
$("#colorMenu").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
  $("#menu").css("background", color);
  $("ul li a").css("color", "white");
  $("ul li.selected a").css("color", color);
  $("h1").css("color", color);
  $("p").css("color", color);
});