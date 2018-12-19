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
});
