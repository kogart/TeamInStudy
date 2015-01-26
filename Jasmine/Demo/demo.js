$(".testx span").hide();
$(".testx").append("<button>CLICK</button>");
$("button").click(function(){
  $(this).prev().show();
  $(this).remove();
});