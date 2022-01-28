<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $name \n Message: $message";
$recipient = "kontakt@magdachudzik.pl";
$subject = "Wiadomość z portfolio";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header( 'Location: https://frontend.magdachudzik.pl/thankyoupage.html' );
exit();