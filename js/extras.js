$("Document").ready(function() {

  $(".bitcoin").on("click", function(){
    alert("nobody accept bitcoin");
  });
  $(".hboselect").on("click", function() {
    $(".hbo:visible").show();
    $(".wifi").hide();
    $(".nothing").hide();
    return;
  });
  $(".wifiselect").on("click", function() {
    $(".hbo").hide();
    $(".wifi:visible").show();
    $(".nothing").hide();
    return;
  });
  $(".reset").on("click", function() {
    $(".hbo").show();
    $(".nothing").show();
    $(".wifi").show();
    return;
  });
});


