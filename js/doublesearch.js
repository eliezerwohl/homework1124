$("Document").ready(function() {

  $(".resetSearch").on("click", function() {
      $('.btn-default').show();
      $(".resetSearch").hide();
      $(".target").empty();
      $( "#stateSearch" ).val('');
       $('.attButton').attr('disabled', 'disabled');
  });
});