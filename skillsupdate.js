$(document).ready(function(){
	$(".submit").click(function(event){
		event.preventDefault();
		var uida = $("#uid").val();
		var skilla = $("#skill").tagsinput('items');		
		
		// AJAX code to send data to php file.
		$.ajax({
			type: "POST",
			url: "skillsupdate.php",
			data: {uid:uida,skill:skilla},
			dataType: "JSON",
			success: function(data) {
				$("#message").html(data);
				$("#message").addClass("alert alert-success");
			},
			error: function(err) {
				alert(err);
			}
		}); 
	});
});