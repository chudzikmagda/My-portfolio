<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    if ($email === false) {
        die("Invalid email address");
    }

    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    $recipient = "kontakt@magdachudzik.pl";
    $subject = "Wiadomość z portfolio fotograficznego";
    $formcontent = "From: $name\nMessage: $message";
    $mailheader = "From: $email\r\n";

    if (mail($recipient, $subject, $formcontent, $mailheader)) {
        header('Location: https://magdachudzik.pl/thankyoupage');
        exit();
    } else {
        die("Error sending email");
    }
} else {
    die("POST data is missing");
}
?>
