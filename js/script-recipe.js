$(document).ready( function(){
	$(".js-back").show();
	$(".js-menu").remove();
	console.log("Imprimiendo mensaje en consola al cargar el documento.");
	/*
	* dándole click al botón RECIPE
	*/
	$(".js-show-recipe").click(function(){
		$(".page").removeClass("make");
		$(this).addClass("active");
		$(".js-show-make").removeClass("active");
	})
	/*
	* dándole click al botón MAKE IT
	*/
	$(".js-show-make").click(function(){
		$(".page").addClass("make");
		$(this).addClass("active");
		$(".js-show-recipe").removeClass("active");
	})
	/*
	* dándole click a la fecha hacia atrás
	*/
	$(".js-back").click(function(){
		$(".page").addClass("make");
		$(".js-show-make").removeClass("active");
		$(".js-show-recipe").removeClass("active");
	})
})