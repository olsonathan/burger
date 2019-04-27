// Make sure we wait to attach our handlers until the DOM is fully loaded.
var idSEL = 0

$(function() {
  $(".eat_it").on("click", function(event) {
   // var id = $(this).data("id");
    var id = idSEL;
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
        console.log("you ate it", newSleep);
        // Reload the page to get the updated list
        $(this).parents("tr").remove();
        location.reload();
      }
    );
  });

  $("#table tr").click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');    
    var value=$(this).find('td:first').html();
//    console.log(value);
//    console.log(typeof value)
    idSEL = parseInt(value);
//    console.log(typeof idSEL)
    return value  
 });
 

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSand = {
      name: $("#sa").val().trim(),
      devoured: 0
     };

     console.log(newSand)
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
/*
  $(document).ready(function() {
    
        $('td:nth-child(3)').hide();
        // if your table has header(th), use this
        $('td:nth-child(3),th:nth-child(3)').hide();
    
});
*/
$(document).ready(function() {
    $('#table tr').each(function () {
      var tdText = $(this).children('td:nth-child(3)').text();
      if (tdText == 1)
        $(this).hide();
    });

    $('td:nth-child(3)').hide();
    // if your table has header(th), use this
    $('td:nth-child(3),th:nth-child(3)').hide();

    $('td:nth-child(4)').hide();
    // if your table has header(th), use this
    $('td:nth-child(4),th:nth-child(4)').hide();


});



});
