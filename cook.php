
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PayInsurance</title>
    <link rel="stylesheet" href="css/cook.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>


</head>
<body>

<?php
  $cookies=$_POST['idpaypal'];



echo '<div id="bloque" class="bloque"><input id="text" type="text" value="' . htmlspecialchars($cookies) . '" style="width:80%" /></div> <div class="bloqueii">  <ol class="ss">
<li class="ns"> Para guardarlo en computadora coloca en la fotografia click dereceho y guardar imagen y en moviles solo le dejas presionado al qr y guardar imagen.

</li>
</ol>    <input type="button" value="Terminar" onclick="t3()" class="bt"></div>
'."\n";
?>

    




<div id="qrcode">
  <div id="qr">

  </div>
</div>
<script src="transferencias.js"></script>
</body>
<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
<script>
              document.getElementById('bloque').style.display="none";

    wr();
    function wr(){
var qrcode = new QRCode("qr");

function makeCode () {
var elText = document.getElementById("text");

if (!elText.value) {
alert("Input a text");
elText.focus();
return;
}

qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
on("blur", function () {
makeCode();
}).
on("keydown", function (e) {
if (e.keyCode == 13) {
makeCode();
}
});
    }
        </script></html>