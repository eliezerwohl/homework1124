$("document").ready(function(){
  $(".fakeInvisible").hide();
  $(".startSearch").click(function() {
  $(".fakeInvisible").slideDown(1000,function(){
    $(".startSearch").hide();
    $("#myCarousel").animate({
      height:'350px'})
    .slideUp(90000000);
    });
  });
  //start pickadate
  $("input").click(function(){
    $("#startDate").pickadate();
    $("#endDate").pickadate();
  });

  /*
  $("input").mouseenter(function(){
    alert("hi");
  })*/
});
