$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$(".js-back").hide();
	$(".js-menu").show();
	var printNews = function(element){
		$(element).text("NUEVAS RECETAS");
	}
	printNews(".new-recipe");
	renderActivities(activities);
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	for(var i=0; i < recipesArray.length; i++){
		if(recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		}
	}
}


/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	var title = recipe.title;
	var name = recipe["source"].name;
	var imageUrl = recipe.name;
	imageUrl = "img/recipes/640x800/" + imageUrl + ".jpg";
	var html = "<a class='item-recipe' href='#'>"+
					"<span class='attribution'>"+
 					"<span class='title-recipe'>"+ title + "</span>"+
					"<span class='metadata-recipe'>"+
					"<span class='author-recipe'>"+ name + "</span>" +
					"<span class='bookmarks-recipe'>" +
					"<span class='icon-bookmark'></span>"+
					"</span>"+
					"</span>"+
					"</span>"+
					"<img src='"+ imageUrl + "'/>"+
				"</a>";
	$(".list-recipes").append(html);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	if(activitiesArray.length > 0){
		$(".wrapper-message").hide();
	}
	for(var i=0; i < activitiesArray.length; i++){
		renderActivity(activitiesArray[i]);
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


