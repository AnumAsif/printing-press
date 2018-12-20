<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $customerName = strip_tags(trim($_POST["customerName"]));
    $customerName = str_replace(array("\r","\n"),array("",""),$customerName);
    $phone= trim($_POST["phoneNumber"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $itemDetails = strip_tags(trim($_POST["itemDetails"]));
    $itemDetails = str_replace(array("\r","\n"),array("",""),$itemDetails);
    $quantity =strip_tags(trim($_POST["quantity"]));
    $quantity = str_replace(array("\r","\n"),array("",""),$quantity);
    $quotationDetails = trim($_POST["quotationDetails"]);
    $file = $_FILES['file'];
    $file_name = $_FILES["file"]["name"];
    $file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));
    $expensions= array("jpeg","jpg","png","doc","docx","xml","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    if(in_array($file_ext,$expensions)=== false OR empty(quantity) OR empty($itemDetails) OR !filter_var($phone, FILTER_VALIDATE_INT) OR empty($customerName) OR empty($phone) OR !filter_var($email, FILTER_VALIDATE_EMAIL)){
      http_response_code(400);
      echo "Oops! There was a problem with your submission. Please complete the form and try again.";
      exit;
    }
    $recipient = "anum.asif.8.31@gmail.com";
    $subject = "Quotation Request from $name";
    $email_content = "Name:$customerName\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Phone:\n$phone\n";
    $email_content .= "Item details:\n$itemDetails\n";
    $email_content .= "Quantity:\n$quantity\n";
    $email_content .= "Details:\n$quotationDetails\n";
    $email_content .= "File:\n$file\n";
    $email_headers = "From:$name<$email>";
    if(mail($recipient, $subject, $email_content, $email_headers))
  //set a 200(okay) response code.
      http_response_code(200);
      echo "Thankyou! Your message has been sent.";
    }else{
      http_response_code(403);
      echo "There was a problem with your submission, please try again.";
    }
?>
