// Question one
$(document).ready(function() {
    $("#start-btn").click(function(){
    event.preventDefault();
    var userName = $("#customerName").val();
    var userEmail = $("#customerEmail").val();
    var userNumber= $("#customerNumber").val();
   
    if(userName.length === 0 || userEmail.length === 0 || userNumber.length ==0){
      $("#no-details").show();}
      else{
        $(".intro").hide();
        $(".feedback").show();
    }


    $("form#ratingForm").submit(function(e) 
    {
        e.preventDefault(); 
        if ($("#ratingForm :radio:checked").length == 0) {
            $('#status').html("nothing checked");
            return false;
        } else {
            $('#status').html( 'You rated ' + $('input:radio[name=rating]:checked').val() + '&#11088');
        }
    })
})

//question 2

   $("#thumbsup").click(function(){
        $("#thumbsup").hide();
        $("#thumbsdown").hide()
        $(".thumbsup").show();
     })

 $("#thumbsdown").click(function(){
     $("#thumbsdown").hide();
     $("#thumbsup").hide();
        $(".thumbsdown").show();
        $(".suggest").show();
    })
    
  //question 3 and 4
  
  var feedbacks = ["recommendation","redo"];
  feedbacks.forEach(function(feedback) {
    var userValue = $("input:radio[name=" + feedback + "]:checked").val();
  });
  $("#finished").click(function(){
      $(".questions").hide();
    $(".thankyou").show();
    $("#finished").hide();
  })
});
