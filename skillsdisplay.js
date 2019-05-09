$(document).ready(function(){
	$(".submit").click(function(event){
		event.preventDefault();
		var uida = $("#uid").val();		
		
		// AJAX code to send data to php file.
		$.ajax({
			type: "POST",
			url: "skillsdisplay.php",
			data: {uid:uida},
			dataType: "JSON",
			success: function(data) {
				if(data!="Couldn't fetch details. Please try again later.")
				{
				var myarr = JSON.parse(data);
				var count=myarr.length;
				var i=0;
				msg=document.getElementById("message");
				for(i=0; i<count; i++)
				{
					str="<span class='badge'>"+myarr[i]+"</span>&nbsp;&nbsp;"
					msg.insertAdjacentHTML( 'beforeend', str);
				}
				}
				else
				{
					alert(data);
				}
			},
			error: function(err) {
				alert(err);
			}
		}); 
	});
});