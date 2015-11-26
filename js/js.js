$("Document").ready(function() {


  $(".btn-default").on("click", function() {


var stateSearch, searchButton, nj, acceptNJ, acceptNY, acceptPA, pa
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

nj = "nj";
ny = "ny";
pa = "pa";
stateSearch = $("#stateSearch").val();


if (acceptNJ[stateSearch.toLowerCase()]) {
    $(".nj").fadeIn(2000);
    $(".pa").fadeOut(500);
    $(".ny").fadeOut(500);
    
  $(".star1").on("click", function() {
    $(".nj5star").show();
    $(".nj4star").show();
    $(".nj3star").show();
    $(".nj2star").show();
    $(".nj1star").show();
    
  });
  $(".star2").on("click", function() {
    $(".nj5star").show();
    $(".nj4star").show();
    $(".nj3star").show();
    $(".nj2star").show();
    $(".nj1star").hide();
    
  });
  $(".star3").on("click", function() {
    $(".nj5star").show();
    $(".nj4star").show();
    $(".nj3star").show();
    $(".nj2star").hide();
    $(".nj1star").hide();
   

  });
  $(".star4").on("click", function() {
    $(".nj5star").show();
    $(".nj4star").show();
    $(".nj3star").hide();
    $(".nj2star").hide();
    $(".nj1star").hide();
    
  });
  $(".star5").on("click", function() {
    $(".nj5star").show();
    $(".nj4star").hide();
    $(".nj3star").hide();
    $(".nj2star").hide();
    $(".nj1star").hide();
  });
     return;
}

if (acceptNY[stateSearch.toLowerCase()]) {
  $(".ny").fadeIn(2000);
  $(".pa").fadeOut(500);
  $(".nj").fadeOut(500);
  $(".star1").on("click", function() {
    $(".ny5star").show();
    $(".ny4star").show();
    $(".ny3star").show();
    $(".ny2star").show();
    $(".ny1star").show();
    
  });
  $(".star2").on("click", function() {
    $(".ny5star").show();
    $(".ny4star").show();
    $(".ny3star").show();
    $(".ny2star").show();
    $(".ny1star").hide();
    
  });
  $(".star3").on("click", function() {
    $(".ny5star").show();
    $(".ny4star").show();
    $(".ny3star").show();
    $(".ny2star").hide();
    $(".ny1star").hide();
   

  });
  $(".star4").on("click", function() {
    $(".ny5star").show();
    $(".ny4star").show();
    $(".ny3star").hide();
    $(".ny2star").hide();
    $(".ny1star").hide();
    
  });
  $(".star5").on("click", function() {
    $(".ny5star").show();
    $(".ny4star").hide();
    $(".ny3star").hide();
    $(".ny2star").hide();
    $(".ny1star").hide();

  });





  return;
}

if (acceptPA[stateSearch.toLowerCase()]) {
  $(".pa").fadeIn(2000);
  $(".ny").fadeOut(500);
  $(".nj").fadeOut(500);
    $(".star1").on("click", function() {
    $(".pa5star").show();
    $(".pa4star").show();
    $(".pa3star").show();
    $(".pa2star").show();
    $(".pa1star").show();
    
  });
  $(".star2").on("click", function() {
    $(".pa5star").show();
    $(".pa4star").show();
    $(".pa3star").show();
    $(".pa2star").show();
    $(".pa1star").hide();
    
  });
  $(".star3").on("click", function() {
    $(".pa5star").show();
    $(".pa4star").show();
    $(".pa3star").show();
    $(".pa2star").hide();
    $(".pa1star").hide();
   

  });
  $(".star4").on("click", function() {
    $(".pa5star").show();
    $(".pa4star").show();
    $(".pa3star").hide();
    $(".pa2star").hide();
    $(".pa1star").hide();
    
  });
  $(".star5").on("click", function() {
    $(".pa5star").show();
    $(".pa4star").hide();
    $(".pa3star").hide();
    $(".pa2star").hide();
    $(".pa1star").hide();
  });

  return;
}

else {
  prompt("please enter a valid tri-state!");
}


});


});