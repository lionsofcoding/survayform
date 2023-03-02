<?
$from = "From: Name <yashagarwal.info@gmail.com>";
$to = "yashagarwal.info@gmail.com";


$cname = $_POST['cname'];
$fname = $_POST['fname'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$phoneno = $_POST['phoneno'];
$rAddressUAE = $_POST['rAddressUAE'];
$homeAddress = $_POST['homeAddress'];
$mobNo = $_POST['mobNo'];
$religion = $_POST['religion'];
$marital = $_POST['marital'];
$fatherName = $_POST['fatherName'];
$motherName = $_POST['motherName'];
$correct = $_POST['correct'];
$udegree = $_POST['udegree'];

$subject = "Survay Form";
$body = "Received From https://quickplusdubai.com/


Company Name: $cname , 
Full Name: $fname, 
Gender: $gender, 
Email: $email, 
Phone No.: $phoneno, 
UAE Address: $rAddressUAE, 
Home Country Address: $homeAddress,
Mobile No.: $mobNo,
Religion: $religion,
Marital Status: $marital,
Father's name: $fatherName,
Mother's name: $motherName,
UAE residence visa: $correct,
University Degree: $udegree";

if (mail($to, $subject, $body, $from)) {
    header('Location: https://quickplusdubai.com/thankyou.html');
    //echo "Message successfully sent!";
} else echo "PHP mail FAILED";
