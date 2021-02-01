$(document).on('click','.finish', function(){
	var frm = $('#callback_form');

		if($('.step4 .date').val() == false){
			$('.step4').find('.error').removeClass('hidden');
			return false;
		}
	
        $.ajax({
            type: frm.attr('method'),
            url: '../ajax/callback_result.php',
            data: frm.serialize(),
            success: function (data) {
                console.log('Submission was successful.');
                console.log(data);
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
        });
});

