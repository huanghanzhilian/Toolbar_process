

//main.js

requirejs.config({   //requirejs.config方法用了定義別名
	paths:{
		jquery:'jquery-1.7.1.min'
	}
});
requirejs(['jquery','viupo'],function($,viupo){
	$('body').css('background-color','red');
	console.log($());
});
