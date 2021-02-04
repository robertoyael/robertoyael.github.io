comienzo();

function btn(){
    var loginForm=document.getElementById("qrform");
var idVe=document.getElementById("uid");
var precio=document.getElementById("precio");
var btnQr=document.getElementById("btnQr");


loginForm.addEventListener('input',()=> {
    if(idVe.value.lenght > 0 && precio.value.lenght >0){
        btnQr.removeAttribute('disable');

    }
    else{
        btnQr.setAttribute('disable','disable');
    }
} )

}

var qrcode = new QRCode("outputbox");

function makeCode () {      
    var elText = document.getElementById("data");
    
    if (!elText.value) {
        elText.focus();
        return;
    }
    
    qrcode.makeCode(elText.value);
}

makeCode();
function ss(){
    $("#data").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });


}
ss();

$('#btn2').click(function(){
    $('#main').animate({'left':'-100%'});
    $('#btn1').removeClass('active');
    $('#btn2').addClass('active');


});
$('#stopbtn').click(function(){
    $('#startbtn img').show();
    $('#stopbtn').hide();
    var videoEl=document.getElementById('preview');
    stream = videoEl.srcObject;
    tracks=stream.getTracks();
    tracks.forEach(function(track){
        track.stop();
    });
    videoEl.srcObject=null;
    $('#startbtn').click(function(){
        $('#startbtn img').hide();
        $('#stopbtn').show();
        var scanner = new Instascan.Scanner({video : document.getElementById('preview'),scanPeriod : 5, mirror : false});
        scanner.addListener('scan',function(content){
            $('#msg2').text(content);

        });
        Instascan.Camera.getCamera().then(function(cameras){
            if(cameras.lenght > 0){
                scanner.start(cameras[0]);
                $('[name="option"]').on('change',function(){
                    if($(this).val()==1){
                        if(camera[0]!=""){
                            scanner.start(cameras[0]);

                        }else{
                            alert('No encontramos ninguna camara');
                        }

                    }
                    else if($(this).val()==2){
                        if (cameras[1]!=""){
                            scanner.start(cameras[1]);
                        }
                        else{
                            alert('No fue encontrada una camara');
                        }

                    }
                });


            }else{
                alert('Camara no encontrada');
            }

        }).catch(function(e){
            alert(e);
        })


    })



})

function ocultar(){
    document.getElementById('box1').style.display="none";
    document.getElementById('box2').style.display="block";
    document.getElementById('btn1').classList.remove("active");
    document.getElementById('btn2').classList.add("active");
    document.getElementById('btn2').style.transition = "all 0.5s";
    document.getElementById('btn1').style.transition = "all 0.5s";



}

function mostrar(){
    document.getElementById('box1').style.display="block";
    document.getElementById('box2').style.display="none";
    document.getElementById('btn2').classList.remove("active");
    document.getElementById('btn1').classList.add("active");
    document.getElementById('btn2').style.transition = "all 0.5s";
    document.getElementById('btn1').style.transition = "all 0.5s";
    TransitionEvent

}







    