


function registrar(){
  console.log('cosa');

    var email= document.getElementById('email').value;
    var password=document.getElementById('mesa').value;
    var age=document.getElementById('age').value;

    // escribo en esa referencia
 if(age >= 18){ 
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
    Swal.fire({
      icon: 'success',
      title: 'Exito Verefica tu imal para ver la verificacion de tu correo de lo contrario no podras acceder ',
      confirmButtonText: `Ok`,
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            window.location='index.html'
            var u =user.displayName;
            displayName="ola";
            user.updateProfile({
              displayName: "Jane Q. User",
              photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(function() {
              console.log('succes')
              // Update successful.
            }).catch(function(error) {
              // An error happened.
            });
  


             
        
            var uid = user.uid;
            var campoN= document.getElementById('name').value;
            var campoM= document.getElementById('email').value;
            var campoC= document.getElementById('mesa').value;
            var campoT= document.getElementById('telefono').value;
            var campoD= document.getElementById('date').value;
            var casauid = user.uid;





            
            var idexacto=uid;
            var date=new Date();
            var m=[1,2,3,4,5,6,7,8,9,10,11,12];
            var current_date=date.getDate();
            var month=m[date.getMonth()];
            var years=date.getFullYear();
            var hors=date.getHours();
            var minute=date.getMinutes();




            
  
  
            database.ref('Users/' ).child(uid).set({
              
          
              name: campoN,
              fecha: current_date+"/"+month+"/"+years,
              email: campoM,
              password:campoC ,
              uid:idexacto,
              telefono:campoT,
              image:"https://firebasestorage.googleapis.com/v0/b/appproyecto-68b02.appspot.com/o/image%2Ffotopersona.png?alt=media&token=5e4771f7-b519-4607-a2cc-540ebf37bc5a",
              paypalid:"",
              nivel1:"",
              nivel2:"",
              onlineStatus:"online",
              typingTo:"noOne",
              mensajes:0


              
            })
  
            // ...
          }
        });
        
        verficar();
        firebase.auth().signOut()


        
      } 
    })
   

  })
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      console.log(errorCode);
      console.log(errorMessage);

      // ...
      // ...
      var err=document.getElementById('err');
      var texto1= document.getElementById('email');
      var texto2=document.getElementById('contrasena');
      var jas=errorMessage;
      var erra=document.getElementById('erro');
      if(errorCode=='auth/email-already-in-use'){
        erra.innerHTML= `
    
        <p>Esta cuenta de correo ya fue usada por otro usuario</p>
        
        
      
        
        `;
        
  
    

  }
  else if(errorCode=='auth/weak password'){
    erra.innerHTML= `
    
    <p>La contraseña debe de tener más de 6 caracteres.</p>
    
    
  
    
    `;
  }

 

      });
    }else{
      alert('Debes de ser mayor de edad');
    }


     
}
function registrare(){
  $(document).ready(function(){  
  
    $("#checkbox_comprobar").click(function() {  
        if($("#checkbox").is(':checked')) {  
            alert("Está activado");  
        } else {  
            alert("No está activado");  
        }  
    });  
  
});  
}
function actualizar(){
  var idVendedors=document.getElementById('ids').value;

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
      


      var postData = idVendedors;

    
      // Get a key for a new Post.
      var newPostKey = firebase.database().ref().child('Users').child(uid).push().key;

    
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/Users/'+uid+"/"+"idP"] = idVendedors;
    
      return firebase.database().ref().update(updates);
    }
  
     


        
  

      // ...
    
  });
  
  



  
} 

    
function login(){
    var email2= document.getElementById('email').value;
    var contrasena3=document.getElementById('contrasena').value;    
    firebase.auth().signInWithEmailAndPassword(email2, contrasena3)
    .then(function(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            
          // User is signed in.
     
          var emailVerified = user.emailVerified;
          if(user.emailVerified){
            window.location='index.html'

      

            
            

          }
          else{
            alert('Debes de verificar el correo antes de hacer login');
          }


         
        } 

          // User is signed out.
          // ...
        
      });



      
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
        var erra=document.getElementById('error');
        if(errorCode == 'auth/user-not-found'){
          erra.innerHTML= `
    
          <p>Usuario no se encuentra registrado</p>
          
          
        
          
          `;

        }else if(errorCode=='auth/wrong-password'){
          erra.innerHTML= `
    
          <p>Password no corresponde al usuario</p>
          
          
        
          
          `;

        }
      });
      
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
              
    
    
              database.ref('asers/' ).child("uid").set({
                
            
                fecha: current_date+"/"+month+"/"+years,
             


                
          
    
              // ...
            
          });
          
        


          
        } 
      })
     


}


function loginGoogle(){

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location='index.html'


    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error);
    // ...
  });
}
function loginFacebook(){
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');


  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error);
    // ...
  });
}
function observasor(){
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
      

        var starCountRef = firebase.database().ref('Users/' + uid + '/name');
        starCountRef.on('value', function(snapshot) {
        console.log("hola "+ snapshot.val());
        valor=snapshot.val();

        var starCountRef = firebase.database().ref('Users/' + uid + '/image');
        starCountRef.on('value', function(snapshot) {
        console.log("hola "+ snapshot.val());
        img=snapshot.val();
        
        var starCountRef = firebase.database().ref('Users/' + uid + '/email');
        starCountRef.on('value', function(snapshot) {
        console.log("hola "+ snapshot.val());
        emails=snapshot.val();

        var starCountRef = firebase.database().ref('Users/' + uid + '/telefono');
        starCountRef.on('value', function(snapshot) {
        console.log("hola "+ snapshot.val());
        telefono=snapshot.val();

        var starCountRef = firebase.database().ref('Users/' + uid + '/fecha');
        starCountRef.on('value', function(snapshot) {
        console.log("hola "+ snapshot.val());
        fecha=snapshot.val();

aparece(user,valor,img);
apareces(user,valor,img,emails,telefono,fecha);;

});
});
});
});
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

observasor();
function aparece(user,valor,img){
  var user = user;
  var vals = valor;
  var imgs = img;


  var contenido=document.getElementById('holas');
  var nav=document.getElementById('contenedor-menu');
  var contenido2=document.getElementById('contenidos-a');
  var contenedorsesion=document.getElementById('contenedor-sesion');
  var menuslider=document.getElementById('menu-slider');

  var hol="hola";








  firebase.auth().onAuthStateChanged(function(user) {

  if(user){
    nav.innerHTML =`
    <input type="checkbox" id="check">
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>

    </label>
    <div class="sidebar">
    <header class="header2">Menu</header>
    <a class="active" href="profile.html"><i class="fas fa-qrcode"></i> <span>Perfil</span></a>
    <a href="form.html"><i class="fas fa-link"></i> <span>Pagar con Qr</span></a>
    <a href="donacion.html"><i  class="fa fa-heart"></i> <span>Donanos</span></a>
    <a href="dialog.html"><i  class="fab fa-google-play"></i> <span>Aplicación</span></a>
    <a href="compras/index.html"><i  class="fas fa-address-card"></i> <span>Socio</span></a>
    <a href="opinion.html"><i  class="fas fa-comment-dots"></i> <span>Opinión</span></a>
    <a href="lista.html"><i  class="fas fa-tag"></i> <span>Lista de Compras</span></a>
    <a href="ayuda/index.html"><i  class="fa fa-info-circle"></i> <span>Ayuda</span></a>
    <a href="servicios/index.html"><i  class="fas fa-gift"></i> <span>Servicios</span></a>
    <a href="" onclick="sesioncerrar()"><i class="fas fa-sign-out-alt"></i> <span>Cerrar Sesion</span></a>



</div>
    `;

    contenido.innerHTML =`
    <a id="contenido" class="casas" href=""></a>

    `;

  
    contenido2.innerHTML =`
    <a id="contenido" class="casa" href=""></a>

    `;
      contenedorsesion.innerHTML =`
      <p id="nombre-texto" class="h2-texto">${vals}</p>
      <a href="profile.html"><img src="${imgs}" alt="" ></a>
      `;

      


    
    

    

     
    
    
  

  }
  
  
  else{
  }
  
});



  
}
function apareces(user,valor,img,emails,telefono,fecha){
  var user = user;
  var fechas = fecha;
  var telefonos= telefono;
  var vals = valor;
  var imgs = img;
  var emails = emails;



  var contenido=document.getElementById('holas');
  var nav=document.getElementById('contenedor-menu');
  var contenido2=document.getElementById('contenidos-a');
  var profile=document.getElementById('contenidos-ab');
  var contenedorsesion=document.getElementById('contenedor-sesion');
  var menuslider=document.getElementById('menu-slider');

  var hol="hola";








  firebase.auth().onAuthStateChanged(function(user) {

  if(user){

      profile.innerHTML =`
      <div class="left" id="left">
      <img src="${imgs}" alt="" width="100px" height="200px">
      <h4>${vals}</h4>
       <p>Socio</p>
       <img src="" alt="">
  </div>
  <div class="right">
      <div class="info">
          <h3>Information</h3>
          <div class="info_data">
               <div class="data">
                  <h4>Email</h4>
                  <p>${emails}</p>
               </div>
               <div class="data">
                 <h4>Telefeno</h4>
                  <p>${telefonos}</p>
            </div>
          </div>
      </div>
    
    <div class="projects" id="perfil-person">
          <h3>Datos</h3>
          <div class="projects_data">
               <div class="data">
                  <h4>Unión</h4>
                  <p>${fechas}</p>
               </div>
               
          </div>
      </div>
  </div>
      `;
      


    
    

    

     
    
    
  

  }
  
  
  else{
  }
  
});



  
}

function cerrar(){
  firebase.auth().signOut();
  
}
function sesioncerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log('saliendo')
  })
  .catch(function(error){
    console.log(error);
  })

}
function verficar(){
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  console.log('enviando correo');
  // Email sent.
}).catch(function(error) {
  console.log(error);

  // An error happened.
});
}