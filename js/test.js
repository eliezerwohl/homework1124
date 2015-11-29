$("document").ready(function(){
  $(".startSearch").click(function() {
  $(".fakeInvisible").slideDown(1000,function(){
    $(".startSearch").hide();
    $("#myCarousel").animate({
      height:'350px'})
    .slideUp(9000000);
    });
  });
  //start pickadate
  $(document).ready(function(){
  $("input").click(function(){
    $("#startDate").pickadate();
    $("#endDate").pickadate();
  });
});

  
});
