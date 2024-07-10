$(document).ready(function(){
    $(".bar").click(function(){
	    $("nav").animate({right :'0'});
	});

	$(".close").click(function(){
	    $("nav").animate({right :'-30%'});
	});
	
	$(".search i").click(function(){
	    $(".search input").animate({width :"toggle"});
	});
	
    $(".filter-controls .power").click(function(){
	    $(".filter-thumbs .power").fadeIn(1000);
		$(".filter-thumbs .cameras").fadeOut(1000);
		$(".filter-thumbs .bags").fadeOut(1000);
	});	
	$(".filter-controls .bags").click(function(){
	    $(".filter-thumbs .bags").fadeIn(1000);
		$(".filter-thumbs .power").fadeOut(1000);
		$(".filter-thumbs .cameras").fadeOut(1000);
	});	
	
	$(".filter-controls .cameras").click(function(){
	    $(".filter-thumbs .cameras").fadeIn(1000);
		$(".filter-thumbs .power").fadeOut(1000);
		$(".filter-thumbs .bags").fadeOut(1000);
	});
});		