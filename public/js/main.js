$(function() {
	$('#message').hide();
    var $userdataForm = $('#userdata_form');
	resource.getCountryName().then(function(data) {
		var $country = $userdataForm.find('select[name="country"]');
		data.forEach(item => {
			$country.append($('<option>', {value: item.alpha3Code, text: item.name})); 
		});
	});

    $userdataForm.find('input[type="submit"]').click(function(e) {
        e.preventDefault();
        var formData = $userdataForm.serializeArray();
        if(formData.length < 4 || formData.filter(item => !item.value).length) {
        	alert('Not a valid form');
        	return;
        }
        var userData = {};
        formData.forEach(item => {
        	userData[item.name] = item.value;
        });
        resource.submitUserData(userData).then(data => {
        	if(!data.err) {
        		$('.form_wrapper').hide();
        		$('.heading').text('Application Complete');
	        	$('#message').text(data.doc.name + ' Thankyou for applying to this useful government service.').show();
	        } else {
	        	console.error(data.err);
        }
        })
    });
});