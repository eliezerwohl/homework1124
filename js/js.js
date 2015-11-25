$("Document").ready(function() {

  $(".btn-default").on("click", function() {


var stateSearch, searchButton, nj, acceptNJ, acceptNY, acceptPA, pa

acceptNJ = {
    "nj" : true,
    "new jersey" : true
};

acceptNY = {
    "ny" : true,
    "new york" : true
};

acceptPA = {
    "pa" : true,
    "pennsylvania" : true
};

nj = "nj";
ny = "ny";
pa = "pa";
stateSearch = $("#stateSearch").val();


if (acceptNJ[stateSearch.toLowerCase()]) {
    $(".nj").fadeIn(2000);
    $(".pa").fadeOut(500);
    $(".ny").fadeOut(500);
     return;
}

if (acceptNY[stateSearch.toLowerCase()]) {
  $(".ny").fadeIn(2000);
  $(".pa").fadeOut(500);
  $(".nj").fadeOut(500);

  return;
}

if (acceptPA[stateSearch.toLowerCase()]) {
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