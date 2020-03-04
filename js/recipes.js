

function checkOut(){
    // prompt = ("enter you name");
    //    var name = prompt("input your name");
    //    var name = document.getElementById("input").value();
    //    alert("Hello " + name);
    var rice = document.getElementById("rice").value;
    var eggs = document.getElementById("eggs").value;
    if(rice !== null && eggs !== null){
    console.log("checkout this: " + meals.meat.Chicken)
    }
}


$(document).ready(function(){
    // $("button#submit").click(function(){
    //     alert("Hello");
    // })
// //   function meals (flour, vegetable, meat, dairy){
// //     this.flours = {
// //       "maizeFlour": "https://cookpad.com/ke/recipes/4727293-how-to-cook-the-perfect-ugali",
// //       "wheatflour": "https://www.bigoven.com/recipe/kenyan-soft-layered-chapati/2296480",
// //       "legumes": "https://www.soscuisine.com/recipe/mixed-legume-salad"
// //     }
// //     this.vegetables = {
// //       "cabbage": "https://www.wellplated.com/sauteed-cabbage/",
// //       "spinach": "https://cafedelites.com/easy-creamed-spinach/"
// //     }
//     this.meat = {
//         "Beaf": "https://www.allrecipes.com/recipe/17325/savory-garlic-marinated-steaks/?internalSource=streams&referringId=475&referringContentType=Recipe%20Hub&clickId=st_trending_s",
//         "Chicken" :"https://recipes.timesofindia.com/recipes/masala-chicken/rs54673639.cms",
//         "Bacon" : "https://www.thespruceeats.com/how-to-make-your-own-bacon-4146515",
//         "Fish": "https://www.gimmesomeoven.com/cook-whole-fish/",
//         "pork" : "https://kenyayote.com/procedure-cooking-wet-fry-pork-meal-kenyan-recipe/",
//     }
//   }

  meals = {
    // flour:{
    //   "maizeFlour": "https://cookpad.com/ke/recipes/4727293-how-to-cook-the-perfect-ugali",
    //   "wheatflour": "https://www.bigoven.com/recipe/kenyan-soft-layered-chapati/2296480",
    //   "legumes": "https://www.soscuisine.com/recipe/mixed-legume-salad"
    // },
    // vegetables:{
    //   "cabbage": "https://www.wellplated.com/sauteed-cabbage/",
    //   "spinach": "https://cafedelites.com/easy-creamed-spinach/"
    // },
   
        meat:{
            "Beaf": "https://www.allrecipes.com/recipe/17325/savory-garlic-marinated-steaks/?internalSource=streams&referringId=475&referringContentType=Recipe%20Hub&clickId=st_trending_s",
            "Chicken" :"https://recipes.timesofindia.com/recipes/masala-chicken/rs54673639.cms",
            "Bacon" : "https://www.thespruceeats.com/how-to-make-your-own-bacon-4146515",
            "Fish": "https://www.gimmesomeoven.com/cook-whole-fish/",
            "pork" : "https://kenyayote.com/procedure-cooking-wet-fry-pork-meal-kenyan-recipe/", 
        }

    // combinedmeals:{
    // "ricespinach":"https://www.allrecipes.com/recipe/72500/spinach-rice/"}

  }
})