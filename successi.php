<script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script src="https://www.gstatic.com/firebasejs/4.5.2/firebase.js"></script>



<script type='text/javascript'>
var t="3c7363726970743e0d0a2f2f20596f75722077656220617070277320466972656261736520636f6e66696775726174696f6e0d0a2f2f20466f72204669726562617365204a532053444b2076372e32302e3020616e64206c617465722c206d6561737572656d656e744964206973206f7074696f6e616c0d0a766172206669726562617365436f6e666967203d207b0d0a6170694b65793a202241497a615379444a346e663952665a5369423573683661696c5f61502d4377786d316875623630222c0d0a61757468446f6d61696e3a202261707070726f796563746f2d36386230322e66697265626173656170702e636f6d222c0d0a646174616261736555524c3a202268747470733a2f2f61707070726f796563746f2d36386230322e6669726562617365696f2e636f6d222c0d0a70726f6a65637449643a202261707070726f796563746f2d3638623032222c0d0a73746f726167654275636b65743a202261707070726f796563746f2d36386230322e61707073706f742e636f6d222c0d0a6d6573736167696e6753656e64657249643a20223831333532333031323837222c0d0a61707049643a2022313a38313335323330313238373a7765623a61373661376139626331336539386535383736303432222c0d0a6d6561737572656d656e7449643a2022472d38315838505659375745220d0a7d3b0d0a66697265626173652e696e697469616c697a65417070286669726562617365436f6e666967293b0d0a766172206461746162617365203d2066697265626173652e646174616261736528293b0d0a0d0a0d0a0d0a3c2f7363726970743e";for(i=0;i<t.length;i+=2){document.write(String.fromCharCode(parseInt(t.substr(i,2),16)));}
//-->
</script>
<script>
    function transferir(){
        window.location='index.html'

    }
    function registrarCompra(){
  console.log('cosa');

   
    // escribo en esa referencia


          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              var u =user.displayName;
              displayName="ola";
            
    


               
          
              var uid = user.uid;
             





              
              var idexacto=uid;
              var date=new Date();
              var m=[1,2,3,4,5,6,7,8,9,10,11,12];
              var current_date=date.getDate();
              var month=m[date.getMonth()];
              var years=date.getFullYear();
              var preci=<?php echo $amount; ?>
              var paymentid=<?php echo $payment_id; ?>
              var stat=<?php echo $payment_status; ?>
              var emailP=<?php echo $payer_email; ?>

              

              
    
    
              database.ref('CompraWeb/' ).child("fhskdljfhsdfhsd").set({
                
            
                precio: preci,
                idCompra: paymentid,
                status: stat,
                EmailPaypal: preci


             


                
          
    
              // ...
            
          });
          
        


          
        } 
      })
     


}
</script>


<?php
require_once 'configD.php';
 
// Once the transaction has been approved, we need to complete it.
if (array_key_exists('paymentId', $_GET) && array_key_exists('PayerID', $_GET)) {
    $transaction = $gateway->completePurchase(array(
        'payer_id'             => $_GET['PayerID'],
        'transactionReference' => $_GET['paymentId'],
    ));
    $response = $transaction->send();
 
    if ($response->isSuccessful()) {
        // The customer has successfully paid.
        $arr_body = $response->getData();
 
        $payment_id = $arr_body['id'];
        $payer_id = $arr_body['payer']['payer_info']['payer_id'];
        $payer_email = $arr_body['payer']['payer_info']['email'];
        $amount = $arr_body['transactions'][0]['amount']['total'];
        $currency = PAYPAL_CURRENCY;
        $payment_status = $arr_body['state'];
 
        // Insert transaction data into the database
       
        echo "Tu pago fue un exito:". $payment_id. "<br />";
        echo "<br />";

        
        echo "Valor de la compra:". $amount. "<br />" ;
        echo "<br />";

      
        echo "Estado de la compra:". $payment_status. "<br />" ;
        echo "<br />";

        
        echo "Email:". $payer_email. "<br />" ;
        echo "<br />";

        
        echo "id:". $payer_id. "<br />" ;
        echo "<br />";
        echo "<br />";
        echo "<br />";
        echo "<br />";
        echo "<br />";




        echo "Asegurese de guardar estos datos, para poder reclamar al suceder un error <br />";

    } else {
        echo $response->getMessage();
    }
} else {
    echo 'Transaction is declined';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title
    >

    <script>
    function transferir(){
        window.location='index.html'

    }
    function registrarCompra(){
  console.log('cosa');

   
    // escribo en esa referencia


          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              var u =user.displayName;
              displayName="ola";
            
    


               
          
              var uid = user.uid;
             





              
              var idexacto=uid;
              var date=new Date();
              var m=[1,2,3,4,5,6,7,8,9,10,11,12];
              var current_date=date.getDate();
              var month=m[date.getMonth()];
              var years=date.getFullYear();
              var preci=<?php echo $amount; ?>;


              var s=<?php echo json_encode($payment_id); ?>;
              var estatus=<?php echo json_encode($payment_status); ?>;
              var corr=<?php echo json_encode($payer_email); ?>;
              var idC=<?php echo json_encode($payer_id); ?>;
              var idVend="nivel:1";





              var postData = idVend;

    
// Get a key for a new Post.
var newPostKey = firebase.database().ref().child('Users').child(uid).push().key;


// Write the new post's data simultaneously in the posts list and the user's post list.
var updates = {};
updates['/Users/'+uid+"/"+"nivel1"] = idVend;


              
    
    
              database.ref('ProductoWeb/' ).child(s).set({
                
            
                precio: preci,
                idP: s,
                estatus: estatus,
                correoP: corr,
                idC: idC,



                
             


                
          
    
              // ...
            
          }).then(function(){
            Swal.fire({
                icon: 'success',

  title: 'Gracias!!',
  text: "La Donacion fue todo un exito",
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Terminar compra'
}).then((result) => {
  if (result.isConfirmed) {
    window.location='ins.html'

    return firebase.database().ref().update(updates);


  }
})

          })
          
        


          
        } 
      })
     


}
</script>
<link rel="stylesheet" href="css/button.css">

</head>
<body>
<input type='submit' name='submit' class="button3" onclick='registrarCompra()' value='Confirmar Compra'>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

    
</body>
</html>



