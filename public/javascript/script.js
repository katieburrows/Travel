$("#searchBtn").on("click", function(event){
	event.preventDefault();

	var findResort = {
		resort: $("#resort").val().trim(),
	}

	$.ajax("/api/findResort", {
		method: "POST",
		data: findResort
	}).then(function(resort){
		console.log(resort);

	})


})