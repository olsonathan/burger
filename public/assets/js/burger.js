// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat_it").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#table tr").click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');    
    var value=$(this).find('td:first').html();
    //alert(value);    
 });
 

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSand = {
      name: $("#sa").val(),
     };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newSand
    }).then(
      function() {
        console.log("created new Sandwhich");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
