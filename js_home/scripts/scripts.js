$(document).ready(function(){
console.log("listo")
$.ajax({
    //==== Settings 
    url : 'https://bio.torre.co/api/bios/DianaXimenaChitiva',
    type : 'GET',
    dataType : 'json',


    beforeSend: function(xhr){xhr.setRequestHeader('User-Agent', 'PostmanRuntime/7.26.3');},
    //==== Callbacks
    success : function(json) {
       console.log(json)
    },
    error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    },
    complete : function(xhr, status) {
        //alert('Petición realizada');
    }
});
})

