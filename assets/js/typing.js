	$(document).ready(function(){
		var typeQuery = $('#typing'); 
		var typeObj = {
	showCursor: false,
	actions: [
		{type: 'erdemsweb.com'},
		{delay: 300},
		{type: ' | Sahip'},
		{delay: 1000},
		{remove: {num: 'erdemsweb.com | Sahip'.length}},
		{type: 'Oyna ve Eğlen BOT'},
		{delay: 300},
		{type: ' | Topluluk Yöneticisi'},
		{delay: 1000},
		{remove: {num: 'Oyna ve Eğlen BOT | Topluluk Yöneticisi'.length}},
		{type: 'Kahve BOT'},
		{delay: 300},
		{type: ' | Bot Moderatörü'},
		{delay: 1000},
		{remove: {num: 'Kahve BOT | Bot Moderatörü'.length}}
	]
	};
	typeQuery
	.on('typewriteComplete', function() {
	typeQuery.typewrite(typeObj);
	})
	.typewrite(typeObj);
	});