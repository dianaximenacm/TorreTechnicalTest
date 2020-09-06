$(document).ready(function(){
console.log("listo")
$.ajax({
    //==== Settings 
    url : 'https://bio.torre.co/api/bios/DianaXimenaChitiva',
    type : 'GET',
    dataType : 'json',

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

