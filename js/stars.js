
$("Document").ready(function() {

$(".1input").on("click", function() {
    $(".5star").show();
    $(".4star").show();
    $(".3star").show();
    $(".2star").show();
    $(".1star").show();
    return;
  });
  $(".2input").on("click", function() {
    $(".5star").show();
    $(".4star").show();
    $(".3star").show();
    $(".2star").show();
    $(".1star").hide();
    return;
  });
  $(".3input").on("click", function() {
    $(".5star").show();
    $(".4star").show();
    $(".3star").show();
    $(".2star").hide();
    $(".1star").hide();
   return;

  });
  $(".4input").on("click", function() {
    $(".5star").show();
    $(".4star").show();
    $(".3star").hide();
    $(".2star").hide();
    $(".1star").hide();
    return;
  });
  $(".5input").on("click", function() {
    $(".5star").show();
    $(".4star").hide();
    $(".3star").hide();
    $(".2star").hide();
    $(".1star").hide();
return;

  });

 });


