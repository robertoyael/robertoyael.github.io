
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

    <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script src="https://www.gstatic.com/firebasejs/4.5.2/firebase.js"></script>



<script type='text/javascript'>
var t="3c7363726970743e0d0a2f2f20596f75722077656220617070277320466972656261736520636f6e66696775726174696f6e0d0a2f2f20466f72204669726562617365204a532053444b2076372e32302e3020616e64206c617465722c206d6561737572656d656e744964206973206f7074696f6e616c0d0a766172206669726562617365436f6e666967203d207b0d0a6170694b65793a202241497a615379444a346e663952665a5369423573683661696c5f61502d4377786d316875623630222c0d0a61757468446f6d61696e3a202261707070726f796563746f2d36386230322e66697265626173656170702e636f6d222c0d0a646174616261736555524c3a202268747470733a2f2f61707070726f796563746f2d36386230322e6669726562617365696f2e636f6d222c0d0a70726f6a65637449643a202261707070726f796563746f2d3638623032222c0d0a73746f726167654275636b65743a202261707070726f796563746f2d36386230322e61707073706f742e636f6d222c0d0a6d6573736167696e6753656e64657249643a20223831333532333031323837222c0d0a61707049643a2022313a38313335323330313238373a7765623a61373661376139626331336539386535383736303432222c0d0a6d6561737572656d656e7449643a2022472d38315838505659375745220d0a7d3b0d0a66697265626173652e696e697469616c697a65417070286669726562617365436f6e666967293b0d0a766172206461746162617365203d2066697265626173652e646174616261736528293b0d0a0d0a0d0a0d0a3c2f7363726970743e";for(i=0;i<t.length;i+=2){document.write(String.fromCharCode(parseInt(t.substr(i,2),16)));}
//-->
</script>
<script> 
function obser(){
  var user = firebase.auth().currentUser;

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          console.log('Existe usuario activo');
          
        
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        console.log(user.emailVerified);
        console.log(user.email);
        console.log(user.name);
        
        


        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var valor;

        var starCountRef = firebase.database().ref('Users/' + uid + '/idP');
        starCountRef.on('value', function(snapshot) {
        valor=snapshot.val(); 
        hola(valor);       



});





        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
        console.log('no existe usuario actiobo');
      }
    });
  }


    function hola(valor){
      var hs=valor;
      window.location.href = "?name=" + hs; 


}

</script> 

 
<?php



require_once "vendor/autoload.php";



use Omnipay\Omnipay;



  
  $cookiesa=$_POST['ids'];
  $cookies=$_POST['tienda'];




define('CLIENT_ID',$cookiesa);


 
define('PAYPAL_RETURN_URL', 'http://localhost/firebase/archivos/app/success.php');
define('PAYPAL_CANCEL_URL', 'http://localhost/firebase/archivos/app/cancel.php');
define('PAYPAL_CURRENCY', 'MXN'); // set your currency here
 
// Connect with the database 

 
$gateway = Omnipay::create('PayPal_Rest');
$gateway->setClientId(CLIENT_ID);
$gateway->setTestMode(false); //set it to 'false' when go live

?>



