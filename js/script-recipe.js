$(document).ready( function(){
	$(".js-back").show();
	$(".js-menu").remove();
	console.log("Imprimiendo mensaje en consola al cargar el documento.");

	$(".js-show-recipe").click(function(){
		$(".page").removeClass("make");
		$(this).addClass("active");
		$(".js-show-make").removeClass("active");
	})

	$(".js-show-make").click(function(){
		$(".page").addClass("make");
		$(this).addClass("active");
		$(".js-show-recipe").removeClass("active");
	})
})