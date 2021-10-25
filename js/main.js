


/* -------Projects Page - Arrow click - Next Previous for year Changing------- */
$j('.next-button').click(function () {
	$j('.nav-tabs > .active').next('li').find('a').trigger('click');
	//trigger the click on the tab same like we click on the tab
});

$j('.previous-button').click(function () {
	$j('.nav-tabs > .active').prev('li').find('a').trigger('click');
	//trigger the click on the tab same like we click on the tab
})