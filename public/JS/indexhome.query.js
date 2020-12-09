'use strict';

const indexjQuery = $(function(){

	var body    = $('#BoDy'),
	fieldHeader = $('#fieldHeader'),
	img1        = $('#img1'),
	img11       = $('#img11');

	img11.on('mouseover', (img1)=>{
		img1.html('<img src="/source/image/vente/20200507_125644.jpg">');
		//alert("MouseOn ");
	});

	alert("TEST DONE ");

	return;
});