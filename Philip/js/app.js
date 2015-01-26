
var $select = $("<select></select>");
var siteStyle = "Default";


$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});


$select.change(function(){
  window.location = $select.val();
});


$('#lightSwitch').click(function (){
  if (siteStyle === "Default") {
   siteStyle = "Dark";
   $('link[href="css/style.css"]').attr('href','css/mundusDarkStyle.css');
   $(this).text('Turn on the lights');
  } else {
    siteStyle = "Default";
   $('link[href="css/mundusDarkStyle.css"]').attr('href','css/style.css');
   $(this).text('Turn off the lights');
  }

});




var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();


function isPasswordValid() {
  return $password.val().length > 8;
  }

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
 return isPasswordValid() && arePasswordsMatching(); 
}

function passwordEvent(){
  
    if(isPasswordValid()) {
     
     $password.next().hide();
  
   } else {
     
        $password.next().show();
       
     }
}
  

function confirmPasswordEvent() {
 
  if(arePasswordsMatching()){
    
    $confirmPassword.next().hide();
    
  } else {
    
   $confirmPassword.next().show();
    
  }
  
}

function enableSubmitEvent(){
 $("#submit").prop("disabled", !canSubmit()); 
}


$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();










