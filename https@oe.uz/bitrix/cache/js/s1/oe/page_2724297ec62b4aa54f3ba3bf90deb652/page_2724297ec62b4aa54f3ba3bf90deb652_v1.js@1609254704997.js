
; /* Start:"a:4:{s:4:"full";s:79:"/local/components/oe/form.result.new/templates/callback/script.js?1608656265657";s:6:"source";s:65:"/local/components/oe/form.result.new/templates/callback/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
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


/* End */
;; /* /local/components/oe/form.result.new/templates/callback/script.js?1608656265657*/
