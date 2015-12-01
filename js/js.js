$("Document").ready(function() {
  $('.attButton').attr('disabled', 'disabled');
  $(".resetSearch").hide();
  $("#stateSearch").keypress(function() {  
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
        $(".target").prepend("<div class='panel panel-info njpanel nj5 5star hbo 5dollar'> <div class='panel panel-body'>Ted's Hotel<button type='button'  class='btn btn-primary pull-right' data-toggle='modal' data-target='.njModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info njpanel nj4 4star hbo 4dollar'> <div class='panel panel-body'>Red's Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.njModal4'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info njpanel nj3 3star wifi 4dollar'> <div class='panel panel-body'>Da Fed Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.njModal3'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info njpanel nj2 2star hbo 2dollar'> <div class='panel panel-body'>Med Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.njModal2'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info njpanel nj1 1star nothing 2dollar'> <div class='panel panel-body'>Dread Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.njModal1'>More Info.</button></div></div>");
        $('.searchButton').hide();
        $(".resetSearch").show();
        $(".notValid").hide();
        $(".validTri").hide();
        $('.attButton').removeAttr('disabled');
        return;
      }
    if (acceptNY[stateSearch.toLowerCase()]) {
        $(".njpanel").remove();
        $(".papanel").remove();
        $(".target").prepend("<div class='panel panel-info nypanel ny5 5star 5dollar hbo'> <div class='panel panel-body'>Jimmy's hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel ny4 4star 5dollar wifi'> <div class='panel panel-body'>Timmy's Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal4'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel ny3 3star 4dollar hbo'> <div class='panel panel-body'>Dimmy Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal3'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel ny2 2star 4dollar wifi'> <div class='panel panel-body'>Lemmy's Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal2'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info nypanel ny1 1star 3dollar hbo'> <div class='panel panel-body '> Simmy hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.nyModal1'>More Info.</button></div></div>");
        $('.searchButton').hide();
        $(".resetSearch").show();
        $(".notValid").hide();
        $(".validTri").hide();
        $('.attButton').removeAttr('disabled');
        return; 
      }
    if (acceptPA[stateSearch.toLowerCase()]) {
        $(".njpanel").remove();
        $(".nypanel").remove();
        $(".target").prepend("<div class='panel panel-info papanel pa5 5star wifi 4dollar'> <div class='panel panel-body'>This Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.paModal5'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info papanel pa4 4star wifi 4dollar'> <div class='panel panel-body'>That hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.paModal4'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info papanel pa3 3star hbo  3dollar'> <div class='panel panel-body'>Matt Hotel <button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.paModal3'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info papanel pa2 2star wifi 2dollar'> <div class='panel panel-body'>Gat Hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.paModal2'>More Info.</button></div></div>");
        $(".target").prepend("<div class='panel panel-info papanel pa1 1star wifi 2dollar'> <div class='panel panel-body'>fat hotel<button type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='.paModal1'>More Info.</button></div></div>");
        $('.searchButton').hide();
        $(".resetSearch").show();
        $(".notValid").hide();
        $(".validTri").hide();
        $('.attButton').removeAttr('disabled');
        return;
        }

      else {
        $(".validTri").show();
        return;
          }
  });
});