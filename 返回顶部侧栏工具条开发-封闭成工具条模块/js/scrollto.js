
define(['jquery'],function($){
	function ScrollTop(opts){
		this.opts=$.extend({},ScrollTop.DEFAULTS,opts);
		this.$el=$('html,body');
	}
	ScrollTop.prototype.move=function(){
		var opts=this.opts,
			dast=opts.dast;
		if($(window).scrollTop()!=dast){
			if(!this.$el.is(':animated')){
				this.$el.animate({scrollTop:dast},opts.speed);
			}
		}
	}
	ScrollTop.prototype.go=function(){
		var dast=this.opts.dast;
		if($(window).scrollTop()!=dast){
			this.$el.scrollTop(dast);
		}
	}
	ScrollTop.DEFAULTS={
		dast:0,
		speed:800
	};
	return {
		ScrollTop:ScrollTop
	};
});