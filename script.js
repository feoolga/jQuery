$(function () {
	$('li').css('color', 'red')

	// $('.row').click(function (event) {
	// 	console.log(event);
	// })


	function func() {
		console.log(777);
		// $('"#' + idInp + '"')
	}

	$('button').bind('click', func)
})