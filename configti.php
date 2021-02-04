<?php
require_once "vendor/autoload.php";
 
use Omnipay\Omnipay;
 
define('CLIENT_ID', 'AQcTG_kG6IRbyZvLipR2Ge32DG04pZTb1-rZ--D_8-TW42vMaddJuojuTEes5MgthOrjInqQCKGln1am');
 
define('PAYPAL_RETURN_URL', 'http://localhost/firebase/archivos/app/successti.php');
define('PAYPAL_CANCEL_URL', 'http://localhost/firebase/archivos/app/cancelD.php');
define('PAYPAL_CURRENCY', 'MXN'); // set your currency here
 
// Connect with the database 

 
$gateway = Omnipay::create('PayPal_Rest');
$gateway->setClientId(CLIENT_ID);
$gateway->setTestMode(true); //set it to 'false' when go live