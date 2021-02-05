<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PayInsurance</title>
    <link rel="shortcut icon" href="../imagenes/logogoogle.png" />
    <style>
 
    </style>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

</head>
<body>
<form action="chargeti.php" method="POST">
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Empresa</label>
    <div class="col-sm-2">
      <input type="text" name="tienda" readonly class="form-control-plaintext" id="staticEmail" value="Amazon">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Cantidad</label>
    <div id="ds" class="col-sm-2">
      <input type="text"  class="form-control" id="inputPassword" placeholder="Dinero">
    </div>
    <div id="bloquei">


    </div>
    <input type="submit" class="btn btn-primary mb-2" name="submit" value="Confirmar" onclick="ss()">



  </div>
  
</form>

</body>


<script>
  
  ss();
function ss(){
  document.getElementById('bloquei').style.display="none";



var contenido=document.getElementById('bloquei');
var ns=document.getElementById('inputPassword').value;
var b = parseInt(ns);

var suma=b+12;




  contenido.innerHTML =`
  <input type="text"  name="amount"  readonly value="${suma}" >

  `;




    


  
  

  

   
  
  




}


</script>
</html>