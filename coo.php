<?php

$idsa=$_POST['tienda'];

setcookie("tienda", $idsa, time()+ -84600);
setcookie("tienda", $idsa, time()+ 84600);
?>