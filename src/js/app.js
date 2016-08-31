var $ = require('jquery');

$(document).ready(function(){
	var templates = [];
	$.get("/templates", function(data) {
		var i = 0;
		$.each(data, function(index, value) {
			$('.templates').html( $('.templates').html() + '<a class="template" href="/templates/"' + value[i].name + '>' + '<img src=' + value[i].img + '>' + '</img>' +'</a>')
			++i;
			console.log(value);
		})
	});
	
});

