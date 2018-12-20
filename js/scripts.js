<<<<<<< HEAD
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -1.277335, lng: 36.818145},
    zoom: 8
  });
  var contentString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
              '<div id="bodyContent">'+
              '<p><b>EXECUTIVE Printing Works ltd(EPW) - Mission:</b><br>Our Mission is to provide high quality print services ' +
              'services to our clients with timely delivery and customer satisfaction. '+
              'The passion we have for our work enables us to undertake of our clients '+
              'jobs. We constantly strive to deliver the highest-quality products possible. '+
              'There is no greater satisfaction than delivering a finished product '+
              'that helps a client reach their goals and objectives. '+
              '<p>EPW, <a href="https://http://executive.office-on-the.net/">'+
              '</div>'+
              '</div>';
  var marker = new google.maps.Marker({
    position:{lat: -1.277335, lng: 36.818145},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    // icon:'accounting.svg'
  })
  var locationInfo = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function(){
    locationInfo.open(map, this);
  })
}
=======

$(document).ready(function(){
  var form = $("#requestQuotation");
  $("#requestQuotation").submit(function(event){
    event.preventDefault();
    var formData = $("#requestQuotation").serialize();
    $.ajax({
        type: 'POST',
        url:$(form).attr('action'),
        data: formData
    })
    .done(function(response){
      $("#formMessage").removeClass('error');
      $("#formMessage").addClass('success');
      $("#formMessage").text(response);

      $('#customerName').val('');
      $('#phoneNumber').val('');
      $('#email').val('');
      $('#itemDetails').val('');
      $('#quantity').val('');
      $('#quotationDetails').val('');
      $('#file').val('');
      // $('#').val('');
      // $('#').val('');
      // $('#').val('');
    })
    .fail(function(data){
      $("#formMessage").removeClass('success');
      $("#formMessage").addClass('error');
      if (data.responseText !== ''){
        $("#formMessage").text(data.responseText);
      }else{
        $("#formMessage").text('Oops! An error occured and your message could not be sent.');
      }
    });
    //end of ajax function
  });
  //End of submit form function
//Fridah///////..............................................................
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
    });
});

//question 2

   $("#thumbsup").click(function(){
        $("#thumbsup").hide();
        $("#thumbsdown").hide()
        $(".thumbsup").show();
     });

 $("#thumbsdown").click(function(){
     $("#thumbsdown").hide();
     $("#thumbsup").hide();
        $(".thumbsdown").show();
        $(".suggest").show();
    });
 
  //question 3 and 4
  
  var feedbacks = ["recommendation","redo"];
  feedbacks.forEach(function(feedback) {
    var userValue = $("input:radio[name=" + feedback + "]:checked").val();
  });
  
  $("#finished").click(function(){
      $(".questions").hide();
    $(".thankyou").show();
    $("#finished").hide();
  });

});
>>>>>>> f57a17d5defdf9b4005aec6e9b122b1b363e98a0
