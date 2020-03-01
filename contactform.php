<?php
if (isset($_POST['submit'])){
$name  = $_POST['name'];
$subject = $_POST['subject'];
$mailfrom = $_POST['mailfrom'];
$message  = $_POST['message'];

$mailTo = "njambililian93@gmail.com";
$headers = "from: ".$mailfrom;
$txt -"you have received an e-mail from". $name.".\n\n".$message;

mail($mailTo,Subject,$txt,$headers);
header("Location: index.php?mailsend");

}
