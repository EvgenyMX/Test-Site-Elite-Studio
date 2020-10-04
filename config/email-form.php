<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../assets/moduls/phpMailer/Exception.php';
require '../assets/moduls/phpMailer/PHPMailer.php';
require '../assets/moduls/phpMailer/SMTP.php';



$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$message = trim($_POST['text']);

$succesVal = false;
$mail = new PHPMailer(true);


// Mail Server settings
// $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
$mail->isSMTP();                                            // Send using SMTP
$mail->CharSet = "utf-8";
$mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
$mail->Username   = 'fisher-sport14@mail.ru';                     // SMTP username
$mail->Password   = '09031996J09j';                               // SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
$mail->Port       = 587;                                    //  TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

//Recipients
$mail->setFrom('fisher-sport14@mail.ru', 'Mailer');
$mail->addAddress('fisher-sport14@mail.ru', 'Joe User');     // Add a recipient

// Content
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Обратная связь';
$mail->Body    = 'This is the HTML <br> Email: ' . $email . '<br> Phome: ' . $phone . '<br> Text: ' . $message;

    
if ( $email !== '' && $phone !== '') {
    $mail->send();
    echo 'true';
}