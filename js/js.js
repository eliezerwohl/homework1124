$("Document").ready(function() {

  $(".btn-default").on("click", function() {


var stateSearch, searchButton, nj, pa
nj = "nj", "NJ";
ny = "ny";
pa = "pa";
stateSearch = $("#stateSearch").val();


if (stateSearch === nj) {
    $(".nj").fadeIn(2000);
    $(".pa").fadeOut(500);
    $(".ny").fadeOut(500);
     return;
}

if (stateSearch === ny) {
  $(".ny").fadeIn(2000);
  $(".pa").fadeOut(500);
  $(".nj").fadeOut(500);

  return;
}

if (stateSearch === pa) {
  $(".pa").fadeIn(2000);
  $(".ny").fadeOut(500);
  $(".nj").fadeOut(500);

  return;
}

else {
  prompt("please enter a valid tri-state!");
}


});


});