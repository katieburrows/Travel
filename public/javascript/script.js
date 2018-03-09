$("#search").on("submit", function(event){
	event.preventDefault();

	var findResort = {
		resort: $("#resort").val().trim(),
	}

	$.ajax("/api/findResort", {
		method: "POST",
		data: findResort
	}).then(function(data){
		console.log(data);
	})
})