function regtienda(){
    console.log('cosa');

   
    // escribo en esa referencia


          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              var u =user.displayName;
              displayName="ola";
            
    


               
          
              var uid = user.uid;
             





              
         var idP=document.getElementById('idpaypal').value;
         var correo=document.getElementById('email').value;
         var tienda=document.getElementById('tienda').value;

            





          
    
              database.ref('ID/' ).child("personas/").push().set({
                
            
                Id: idP,
                Tienda: tienda,
                Correo: correo
               



                
             


                
          
    
              // ...
            
          }).then(function(){
            Swal.fire({

  title: 'Gracias!!',
  text: "El registro fue un exito",
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Terminar compra'
}).then((result) => {
  if (result.isConfirmed) {
    window.location='cook.php'



  }
})

          })
          
        


          
        } 
      })
     

}
function pro()
{
  alert('hola');
}
function regid(){
  console.log('cosa');

 
  // escribo en esa referencia


        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            var u =user.displayName;
            displayName="ola";
          
  


             
        
            var uid = user.uid;
           





            
       var idP=document.getElementById('idpaypal').value;
       var correo=document.getElementById('email').value;

          





        
  
            database.ref('ID/' ).child("nivel:1/").push().set({
              
          
              Id: idP,
              Correo: correo
             



              
           


              
        
  
            // ...
          
        }).then(function(){
          Swal.fire({

title: 'Gracias!!',
text: "La compra de nivel 1 fue todo un exito",
confirmButtonColor: '#3085d6',
confirmButtonText: 'Terminar compra'
}).then((result) => {
if (result.isConfirmed) {
  window.location='index.html'



}
})

        })
        
      


        
      } 
    })
   

}