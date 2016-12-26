//main.js

requirejs.config({   //requirejs.config方法用了定義別名
	paths:{
		jquery:'jquery-1.7.1.min'
	}
});
requirejs(['jquery','viupo'],function($,viupo){
	$("#backTop").on('click', go);
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$("#backTop").fadeIn();
		}else{
			$("#backTop").fadeOut();
		}
	}
	checkPosition($(window).height());
	function move(){
		$('html,body').animate({scrollTop:0},800);
	}
	function go(){
		$('html,body').scrollTop(0);
	}
});
