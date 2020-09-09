
$(document).ready(function(){
console.log("listo")

})

function CallCompare(){
    // e.preventDefault();
    $.ajax({
        //==== Settings 
        url : '/photo',
        type : 'GET',
        dataType : 'json',
        data: {userName: document.getElementById('fname').value},
        //==== Callbacks
        success : function(json) {
            var photo = document.querySelector("#picture-torre"); 
           console.log(json)
           photo.setAttribute("src", JSON.parse(json.body).person.picture);
           console.log(JSON.parse(json.body).person.picture)
        },
        error : function(xhr, status) {
            swal('Disculpe, existió un problema, ingrese los datos de nuevo y verifique que esten correctos');
        },
        complete : function(xhr, status) {
        }
    });

    $.ajax({
        //==== Settings 
        url : '/compare',
        data: {
            userName: document.getElementById('fname').value,
            offerId: document.getElementById('fnumber').value 
        },
        type : 'GET',
        dataType : 'json',
    
        //==== Callbacks
        beforeSend: function(xhr){
            $('#penta-list-interception').html("")
            $('#penta-list-difference').html("")
        },
        success : function(json) {
            console.log(json) 
            $.each(json.interception, (i, element) => {
                console.log(element)
                $('#penta-list-interception').append(
                    $('<li/>').append(
                        $('<span/>', { 'class': 'penta-icon'}).append(
                            $('<h2>', { text: element })
                        ) 
                    )
                )
            });
           $.each(json.difference, (i, element) => {
            console.log(element)
            $('#penta-list-difference').append(
                $('<li/>').append(
                    $('<span/>', { 'class': 'penta-icon'}).append(
                        $('<h2>', { text: element })
                    ) 
                )
            )
        });
        },
        error : function(xhr, status) {
            swal('Disculpe, existió un problema, ingrese los datos de nuevo y verifique que esten correctos');
        },
        complete : function(xhr, status) {
            swal('Petición realizada');
        }
    });
}