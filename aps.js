// Your web app's Firebase configuration
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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

      var coos="PayInsurance"
      var valr='$'
      const db = firebase.database();
      coleccionProductos = db.ref().child('ListaCompras').child(idexacto);
      bodyProductos = $('#bodyProductos').val();
      //console.log(bodyProductos);  
      $('form').submit(function(e){
        e.preventDefault();
        let id = $('#id').val();
        let ida = $('#codigo').val();
        let empresa = $('#empresa').val();
        let fecha = $('#fecha').val();
        let tipo = $('#tipo').val();
        let status = $('#status').val();
        let precio = $('#precio').val();


        let idFirebase = id;
        if(idFirebase == ''){
         idFirebase = coleccionProductos.push().key;
        };
        data = {Id:ida, empresa: empresa,fecha:fecha, precio: precio,status: status,tipo: tipo};
        actualizacionData = {};
        actualizacionData[`/${idFirebase}`] = data;
        coleccionProductos.update(actualizacionData);
        id = '';
        $('form').trigger('reset');
        $('#modalAltaEdicion').modal('hide');
      });
      const iconoEditar = '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
      const iconoBorrar = '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';
      function mostrarProductos({Id, empresa,fecha, precio,status,tipo}){
        return `
        <td>${Id}</td>
        <td>${empresa}</td>
        <td>${fecha}</td>
        <td>${tipo}</td>
        <td>${status}</td>
        <td>${precio}</td>


        <td><button class="btnBorrar btn btn-danger" data-toggle="tooltip" title="Borrar">${iconoBorrar}</button></td>
        `
      };
      //CHILD_ADDED
      coleccionProductos.on('child_added', data =>{
        let tr = document.createElement('tr')
        tr.id = data.key
        tr.innerHTML = mostrarProductos(data.val())
        document.getElementById('bodyProductos').appendChild(tr)
      });
      //CHILD_CHANGED
      coleccionProductos.on('child_changed', data =>{
        let nodoEditado = document.getElementById(data.key)
        nodoEditado.innerHTML = mostrarProductos(data.val())
      });
      //CHILD_REMOVED
      coleccionProductos.on('child_removed', data =>{
        let nodoEditado = document.getElementById(data.key)
        document.getElementById('bodyProductos').removeChild(nodoEditado)
      });
      //Programación de los botones
      $('#btnNuevo').click(function(){
        $('#id').val('');
        $('#codigo').val('');
        $('#empresa').val('');
        $('#fecha').val('');
        $('#precio').val('');
        $('#status').val('');
        $('#tipo').val('');
        $('form').trigger('reset');
        $('#modalAltaEdicion').modal('show');
      });
      $('#tablaProductos').on('click', '.btnEditar', function(){
        let id = $(this).closest('tr').attr('id');
        let cod = $(this).closest('tr').find('td:eq(0)').text();
        let empresa = $(this).closest('tr').find('td:eq(1)').text();
        let fecha = $(this).closest('tr').find('td:eq(2)').text();
        let tipo = $(this).closest('tr').find('td:eq(3)').text();
        let status = $(this).closest('tr').find('td:eq(4)').text();
        let precio = $(this).closest('tr').find('td:eq(5)').text();

        $('#id').val(id);
        $('#codigo').val(cod);
        $('#empresa').val(empresa);    
        $('#fecha').val(fecha);    
        $('#tipo').val(tipo);                    
        $('#status').val(status);                
        $('#precio').val(precio);  
        
              
        $('#modalAltaEdicion').modal('show');
      });
      $('#tablaProductos').on('click', '.btnBorrar', function(){
          Swal.fire({
            title: '¿Está seguro de eliminar el producto?',
            text: "¡Está operación no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Borrar'
            }).then((result) => {
            if (result.value) {
                let id = $(this).closest('tr').attr('id'); //capturamos el atributo ID de la fila  
                db.ref(`ListaCompras/${idexacto}/${id}`).remove() //eliminamos el producto de firebase      
                Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.','success')
            }
            })        
      });






      

      


    
  
  



  
} 
})



  //ffdsfdf
  