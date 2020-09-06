$(document).ready(function(){
console.log("listo")
$.ajax({
    //==== Settings 
    url : 'http://localhost:8080/photo',
    type : 'GET',
    dataType : 'json',


    beforeSend: function(xhr){xhr.setRequestHeader('User-Agent', 'PostmanRuntime/7.26.3');},
    //==== Callbacks
    success : function(json) {
        var photo = document.querySelector("#picture-torre"); 
       console.log(json)
       photo.setAttribute("src", JSON.parse(json.body).person.picture);

       var have =document.querySelector("#interception"); 
       console.log(json)
       have.setAttribute("src", JSON.parse(json.body).person.picture);
    },
    error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    },
    complete : function(xhr, status) {
        //alert('Petición realizada');
    }
});
})

