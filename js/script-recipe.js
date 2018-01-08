$(document).ready( function(){
	$(".js-back").show();
	$(".js-menu").hide();
	console.log("Imprimiendo mensaje en consola al cargar el documento.");

	$(".js-show-recipe").click(function(){
		$(".page").removeClass("make");
	})

	$(".js-show-make").click(function(){
		$(".page").addClass("make");
	})
})