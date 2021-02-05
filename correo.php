<?php

$destinatario= 'contacto9007@gmail.com';
//esto es al correo al que se enviara el mensaje
$nombre =$_POST['nombre'];
$asunto=$_POST['asunto'];
$mensaje=$_POST['mensaje'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];



$header= "Enviado desde la pagina de PayInsurance";
$mensajeCompleto= $mensaje . "\nAtentamente: " . $nombre;
@mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href='contactanos.html'\",1000)</script>";



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
