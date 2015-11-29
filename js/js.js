$("Document").ready(function() {
  $(".resetSearch").hide();
  $(".searchButton").on("click", function() {   
    var stateSearch, searchButton, nj, acceptNJ, acceptNY, acceptPA, pa, endEmpty, startEmpty, stateEmpty
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
    endEmpty= $("#endDate").val();
    startEmpty= $("#startDate").val();

    if (endEmpty.length === 0) {
       $(".notValid").show();
      return;     
      }

    if (startEmpty.length === 0) {     
        alert("please enter start");
         $(".notValid").show();
        return;
      }
    if (stateSearch.length === 0) {
        $(".notValid").show();
        return;
      }
  
    if (acceptNJ[stateSearch.toLowerCase()]) {
        $(".papanel").remove();
        $(".nypanel").remove();
        $(".target").prepend("<div class='panel panel-info njpanel 5star hbo 5dollar'> <div class='panel panel-body'>457 dollar star nj hbo<button type='button'  class='btn btn-primary' data-toggle='modal' data-target='.nyModal5'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info njpanel 4star hbo 4dollar'> <div class='panel panel-body'>356 dollar 4 star nj hbo<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal5'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info njpanel 3star wifi 4dollar'> <div class='panel panel-body'>236 dollar 3 star nj wifi<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal5'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info njpanel 2star hbo 2dollar'> <div class='panel panel-body'>149 dollar 2 star nj hbo<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal5'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info njpanel 1star nothing 2dollar'> <div class='panel panel-body'>101 dollar1 star nj<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal5'>More Information</button></div></div>");
        $('.searchButton').hide();
        $(".resetSearch").show();
        $(".notValid").hide();
        $(".validTri").hide();
        return;
      }
    if (acceptNY[stateSearch.toLowerCase()]) {
        $(".njpanel").remove();
        $(".papanel").remove();
        $(".target").prepend("<div class='panel panel-info nypanel 5star 5dollar hbo'> <div class='panel panel-body'>499 5 star ny hbo<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal5'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel 4star 5dollar wifi'> <div class='panel panel-body'>423 dollar 4 star ny wifi<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal4'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel 3star 4dollar hbo'> <div class='panel panel-body'>345 dollar 3 star ny hbo<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal3'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel 2star 4dollar wifi'> <div class='panel panel-body'> 322 dollar 2 star ny wifi<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal2'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel 1star 3dollar hbo'> <div class='panel panel-body '> 246 dollar 1 star ny hbo<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.nyModal1'>More Information</button></div></div>");
        $('.searchButton').hide();
        $(".resetSearch").show();
        $(".notValid").hide();
        $(".validTri").hide();
        return; 
      }
    if (acceptPA[stateSearch.toLowerCase()]) {
        $(".njpanel").remove();
        $(".nypanel").remove();
        $(".target").prepend("<div class='panel panel-info papanel 5star wifi'> <div class='panel panel-body 4dollar'>395 dollar 5 star pa wifi<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.paModal5'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info papanel 4star wifi'> <div class='panel panel-body 4dollar'>350 dollar 4 star pa wifi<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.paModal4'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info papanel 3star hbo'> <div class='panel panel-body 3dollar'>245 dollar 3 star pa hbo<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.paModal3'>More Information</button></div></div>");
        $(".target").prepend("<div class='panel panel-info papanel 2star wifi'> <div class='panel panel-body 2dollar'>197 dollar 2 star pa wifi<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.paModal2'>More Information</button></div></div>");
        return;
        }

      else {
        $(".notValid").hide();
        $(".validTri").show();
        return;
          }
  });
});