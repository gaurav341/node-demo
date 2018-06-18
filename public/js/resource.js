var resource = {
    getCountryName: function() {
    	var dfd = $.Deferred();
        var url = "/countries";
        $.get(url, function(data) {
        	dfd.resolve(data);
        });
        return dfd.promise();
    }, 
    submitUserData: function(userData) {
    	var dfd = $.Deferred();
        var url = "/userData";
        $.ajax({
			url: url,
			type: "POST",
			data: JSON.stringify(userData),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(res){
				dfd.resolve(res);
			}
		});
        return dfd.promise();
    }
}