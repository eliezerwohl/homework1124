
$("Document").ready(function() {

$(".1input").on("click", function() {
    $(".5star").show();
    $(".4star").show();
    $(".3star").show();
    $(".2star").show();
    $(".1star").show();
    
  });
  $(".2input").on("click", function() {
    $(".5star").show();
    $(".4star").show();
    $(".3star").show();
    $(".2star").show();
    $(".1star").hide();
    
  });
  $(".3input").on("click", function() {
    $(".5star").show();
    $(".4star").show();
    $(".3star").show();
    $(".2star").hide();
    $(".1star").hide();
   

  });
  $(".4input").on("click", function() {
    $(".5star").show();
    $(".4star").show();
    $(".3star").hide();
    $(".2star").hide();
    $(".1star").hide();
    
  });
  $(".5input").on("click", function() {
    $(".5star").show();
    $(".4star").hide();
    $(".3star").hide();
    $(".2star").hide();
    $(".1star").hide();


  });

 });


