var bgColor = "#346799";
var color = "#4fa3fc";
var myHeader = $("#pageText h1");
var myText = $("#pageText p");


//Press element in meny
$("#menu li").click(function(){

  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  
  $("#menu").css("background", color);
  $("ul li a").css("color", "white");
  $("ul li.selected a").css("color", color);
  $("h1").css("color", color);
  $("p").css("color", color);
  
  // €Ändra text pŒå sidan
  myHeader.text($(this).attr("title"))
  myText.text($(this).attr("value"))

});


//Press colorMenu
$("#colorMenu").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");

  // Ršd
  if(color === "rgb(252, 76, 79)"){
    bgColor = "#972E2F";
  }
  
  // Svart
  else if(color === "rgb(56, 64, 71)"){
    bgColor = "#888c91"; 
  }
  
  // BlŒ
  else if(color === "rgb(79, 163, 252)"){
    bgColor = "#346799"; 
  }
  
  // Gul
  else if(color === "rgb(236, 209, 63)"){
    bgColor = "#D48919"; 
  }
  
  $(".ui-state-persist").css("background", color);
  $(".titel").css("background-color", bgColor);
});

$(".ui-state-persist").css("background", color);
$(".titel").css("background-color", bgColor);


// Jasmin
$(".spoiler span").hide();
$(".spoiler button").click(function(){

  $(this).remove();
  $(".spoiler span").show();

});

$(document).on("pagecreate","#foo",function(){
  $(".swipe").on("swipe",function(){
    $(".swipe").text("Ja, det är sant.");
  });                       
});



