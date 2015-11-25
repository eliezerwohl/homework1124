$("Document").ready(function() {

  $(".btn-default").on("click", function() {


var state1, searchButton, nj, pa
nj = "nj", "NJ";
ny = "ny";
pa = "pa";
state1 = $("#state1").val();


if (state1 === nj) {
    $(".nj").fadeIn(2000);
    $(".pa").fadeOut(2000);
    $(".ny").fadeOut(2000);
     return;
}

if (state1 === ny) {
  $(".ny").fadeIn(2000);

  return;


}

else {
  prompt("please enter something");
}


});


});