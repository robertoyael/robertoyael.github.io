function verificar(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('Existe usuario activo');
            aparece(user);
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          console.log(user.emailVerified);
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log('no existe usuario actiobo');
        }
      });
  }
  
  observasor();
  function aparece(user,valor,img){
    var user = user;
    var vals = valor;
    var imgs = img;
  
  
    var contenido=document.getElementById('perfil-person');

  
  
  
  
  
  
  
  
    firebase.auth().onAuthStateChanged(function(user) {
  
    if(user){
      contenido.innerHTML=`
      gjsofskfsf
      
      `;
      

  
  
      
      
  
      
  
       
      
      
    
  
    }
    
    
    else{
    }
    
  });
  
  
  
    
  }