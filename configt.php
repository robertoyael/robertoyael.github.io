<?php
require_once "vendor/autoload.php";
 
use Omnipay\Omnipay;
 
define('CLIENT_ID', 'AQywIvsphgGw27ibHhhrop1rb4C1pxnI-W5ex-doimAdHSpKZWg_LRdlX86mZ_OnEeTalv0TBNaNqXkY');
 
define('PAYPAL_RETURN_URL', 'http://localhost/firebase/archivos/app/successt.php');
define('PAYPAL_CANCEL_URL', 'http://localhost/firebase/archivos/app/cancelD.php');
define('PAYPAL_CURRENCY', 'MXN'); // set your currency here
 
// Connect with the database 

 
$gateway = Omnipay::create('PayPal_Rest');
$gateway->setClientId(CLIENT_ID);
$gateway->setTestMode(false); //set it to 'false' when go live