  
document.addEventListener("DOMContentLoaded", function(event) {
    swal ("Welcome to the  new feature", "Feedback Job Application", "success");
var thumbnailElement = document.getElementById("smart_thumbnail")
    thumbnailElement.addEventListener("click", function() {
	alert("click again and see what happen");

	if (thumbnailElement.className == "") {
	    (thumbnailElement.className = "small")
	}else{
	    (thumbnailElement.className = "")
	}

    });
});