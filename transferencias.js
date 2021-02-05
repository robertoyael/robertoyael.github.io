function t1(){
    window.location='reg.html'

}
function t2(){
    window.location='regi.html'

}
function t3(){
    Swal.fire({

        title: 'Gracias!!',
        text: "La creación del nivel 2 fue todo un exito",
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Terminar compra'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location='index.html'
      
      
      
        }
      })
      

}
function t4(){
    console.log('cosa');

   
    // escribo en esa referencia


          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              var u =user.displayName;
              displayName="ola";
            
    


               
          
              var uid = user.uid;
             





              
         var correo=document.getElementById('email').value;
         var mensaje=document.getElementById('mensaje').value;

            





          
    
              database.ref('OpinionesWeb/' ).push().set({
                
            
                Correo: correo,
                Mensaje: mensaje

               



                
             


                
          
    
              // ...
            
          }).then(function(){
            Swal.fire({

  title: 'Gracias!!',
  text: "Gracias por ayudarnos a mejor la app y web",
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Terminar'
}).then((result) => {
  if (result.isConfirmed) {
    window.location='index.html'



  }
})

          })
          
        


          
        } 
      })
     

}
