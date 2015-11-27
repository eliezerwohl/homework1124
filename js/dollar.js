$("Document").ready(function() {
$(".500dol").on("click", function() {
    $(".5dollar:visible").show();
    $(".4dollar").hide();
    $(".3dollar").hide();
    $(".2dollar").hide();
   return;
    
  });

$(".400dol").on("click", function() {
   $(".5dollar:visible").hide();
    $(".4dollar").show();
    $(".3dollar").hide();
    $(".2dollar").hide();
   return;
    
  });
$(".300dol").on("click", function() {
  $(".5dollar").hide();
    $(".4dollar").hide();
    $(".3dollar").show();
    $(".2dollar").hide();
   return;
    
  });

$(".200dol").on("click", function() {
  $(".5dollar").hide();
    $(".4dollar").hide();
    $(".3dollar").hide();
    $(".2dollar:visible").show();
   return;
    
  });
$(".threefiddy").on("click", function() {
  prompt("get out of here you loch ness monster, you ain't fooling no one");
});

});
