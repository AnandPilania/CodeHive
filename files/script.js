$(document).ready(function(){

	
	$('#download').click(function(e){		
		
		$.generateFile({
			filename	: 'source.html',
			content		: "<!DOCTYPE html>\n<html>\n"+$("#preview").contents().find("html").html(),
			script		: 'download.php'
		});
		e.preventDefault();
	});
	
});