
$("Document").ready(function() {
  $(".1input").on("click", function() {
    $(".5star:visible").show();
    $(".4star:visible").show();
    $(".3star:visible").show();
    $(".2star:visible").show();
    $(".1star:visible").show();
    return;
  });
  $(".2input").on("click", function() {
    $(".5star:visible").show();
    $(".4star:visible").show();
    $(".3star:visible").show();
    $(".2star:visible").show();
    $(".1star").hide();
    return;
  });
  $(".3input").on("click", function() {
    $(".5star:visible").show();
    $(".4star:visible").show();
    $(".3star:visible").show();
    $(".2star").hide();
    $(".1star").hide();
    return;
  });
  $(".4input").on("click", function() {
    $(".5star:visible").show();
    $(".4star:visible").show();
    $(".3star").hide();
    $(".2star").hide();
    $(".1star").hide();
    return;
  });
  $(".5input").on("click", function() {
    $(".5star:visible").show();
    $(".4star").hide();
    $(".3star").hide();
    $(".2star").hide();
    $(".1star").hide();
    return;
  });

});


