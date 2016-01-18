$(function(){
	$(".tab-content tr input").focus(function(){
		$(this).addClass("add");
	}).blur(function(){
		$(this).removeClass("add");
	})
})