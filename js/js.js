$("Document").ready(function() {


  $(".btn-default").on("click", function() {


var stateSearch, searchButton, nj, acceptNJ, acceptNY, acceptPA, pa, domtest,
// dictionary
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

domtest= "domtest"
nj = "nj";
ny = "ny";
pa = "pa";
stateSearch = $("#stateSearch").val();

if (stateSearch === domtest) {

$(".target").prepend("<div>").addClass("panel panel-warning nj 5star").prepend("<div class='panel panel-body'>nj one star </div></div></div>");
$(".target").prepend("<div class='panel panel-warning'> <div class='panel panel-body'>c'mon </div></div>");
// var panel, panelbody, hey

// panel = $("<div>").addClass("panel panel-default ny ny5star");
// panelbody = $("<div>").addClass("panel-body");
// hey = "hey"

//  $("body").append(panel).append(panelbody).append(hey);
// return;

};

if (acceptNJ[stateSearch.toLowerCase()]) {
  $(".papanel").remove();
  $(".nypanel").remove();
$(".target").prepend("<div class='panel panel-warning njpanel 5star'> <div class='panel panel-body'>5 star nj</div></div>");
$(".target").prepend("<div class='panel panel-warning njpanel 4star'> <div class='panel panel-body'>4 star nj</div></div>");
$(".target").prepend("<div class='panel panel-warning njpanel 3star'> <div class='panel panel-body'>3 star nj</div></div>");
$(".target").prepend("<div class='panel panel-warning njpanel 2star'> <div class='panel panel-body'>2 star nj</div></div>");
$(".target").prepend("<div class='panel panel-warning njpanel 1star'> <div class='panel panel-body'>1 star nj</div></div>");




  //   $(".nj").fadeIn(2000);
  //   $(".pa").fadeOut(500);
  //   $(".ny").fadeOut(500);
    
  // $(".star1").on("click", function() {
  //   $(".nj5star").show();
  //   $(".nj4star").show();
  //   $(".nj3star").show();
  //   $(".nj2star").show();
  //   $(".nj1star").show();
    
  // });
  // $(".star2").on("click", function() {
  //   $(".nj5star").show();
  //   $(".nj4star").show();
  //   $(".nj3star").show();
  //   $(".nj2star").show();
  //   $(".nj1star").hide();
    
  // });
  // $(".star3").on("click", function() {
  //   $(".nj5star").show();
  //   $(".nj4star").show();
  //   $(".nj3star").show();
  //   $(".nj2star").hide();
  //   $(".nj1star").hide();
   

  // });
  // $(".star4").on("click", function() {
  //   $(".nj5star").show();
  //   $(".nj4star").show();
  //   $(".nj3star").hide();
  //   $(".nj2star").hide();
  //   $(".nj1star").hide();
    
  // });
  // $(".star5").on("click", function() {
  //   $(".nj5star").show();
  //   $(".nj4star").hide();
  //   $(".nj3star").hide();
  //   $(".nj2star").hide();
  //   $(".nj1star").hide();
  // });
     return;
}

if (acceptNY[stateSearch.toLowerCase()]) {
  $(".njpanel").remove();
  $(".papanel").remove();
 $(".target").prepend("<div class='panel panel-warning nypanel 5star'> <div class='panel panel-body'>5 star ny</div></div>");
$(".target").prepend("<div class='panel panel-warning nypanel 4star'> <div class='panel panel-body'>4 star ny</div></div>");
$(".target").prepend("<div class='panel panel-warning nypanel 3star'> <div class='panel panel-body'>3 star ny</div></div>");
$(".target").prepend("<div class='panel panel-warning nypanel 2star'> <div class='panel panel-body'>2 star ny</div></div>");
$(".target").prepend("<div class='panel panel-warning nypanel 1star'> <div class='panel panel-body'>1 star ny</div></div>");
 
 return; 
  };








if (acceptPA[stateSearch.toLowerCase()]) {
  $(".njpanel").remove();
  $(".nypanel").remove();
 $(".target").prepend("<div class='panel panel-warning papanel 5star'> <div class='panel panel-body'>5 star pa</div></div>");
$(".target").prepend("<div class='panel panel-warning papanel 4star'> <div class='panel panel-body'>4 star pa</div></div>");
$(".target").prepend("<div class='panel panel-warning papanel 3star'> <div class='panel panel-body'>3 star pa</div></div>");
$(".target").prepend("<div class='panel panel-warning papanel 2star'> <div class='panel panel-body'>2 star pa</div></div>");
$(".target").prepend("<div class='panel panel-warning papanel 1star'> <div class='panel panel-body'>1 star pa</div></div>");

  return;
}

else {
  prompt("please enter a valid tri-state!");
}


});


});