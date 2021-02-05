 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

    <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script src="https://www.gstatic.com/firebasejs/4.5.2/firebase.js"></script>



<script>
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyDJ4nf9RfZSiB5sh6ail_aP-Cwxm1hub60",
authDomain: "appproyecto-68b02.firebaseapp.com",
databaseURL: "https://appproyecto-68b02.firebaseio.com",
projectId: "appproyecto-68b02",
storageBucket: "appproyecto-68b02.appspot.com",
messagingSenderId: "81352301287",
appId: "1:81352301287:web:a76a7a9bc13e98e5876042",
measurementId: "G-81X8PVY7WE"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();



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



  
$cookies=$_COOKIE["usuario"];



define('CLIENT_ID',$cookies);


 
define('PAYPAL_RETURN_URL', 'http://localhost/firebase/archivos/app/success.php');
define('PAYPAL_CANCEL_URL', 'http://localhost/firebase/archivos/app/cancel.php');
define('PAYPAL_CURRENCY', 'MXN'); // set your currency here
 
// Connect with the database 

 
$gateway = Omnipay::create('PayPal_Rest');
$gateway->setClientId(CLIENT_ID);
$gateway->setTestMode(false); //set it to 'false' when go live

?>



