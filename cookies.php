<?php
$id=$_POST['ids'];


setcookie("usuario", $id, time()+ -84600);
setcookie("usuario", $id, time()+ 84600);
$idsa=$_POST['tienda'];


setcookie("tienda", $idsa, time()+ -84600);
setcookie("tienda", $idsa, time()+ 84600);
$mensaje=$_POST['text'];


setcookie("mensaje", $mensaje, time()+ -84600);
setcookie("mensaje", $mensaje, time()+ 84600);





?>
