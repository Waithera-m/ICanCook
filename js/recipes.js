

function checkOut(){
    var allPurposeFlour = document.getElementById("allPurposeWheatFlour").value;
  var maizeFlour = document.getElementById("maizeFlour").value;
  var rice = document.getElementById("rice").value;
  var pasta = document.getElementById("pasta").value;
  var beans = document.getElementById("beans").value;
  var lentils = document.getElementById("lentils").value;
  var blackBeans = document.getElementById("blackbeans").value;
  var milk = document.getElementById("milk").value;
  var eggs = document.getElementById("eggs").value;
  var cheddar = document.getElementById("cheddar").value;
  var parmesan = document.getElementById("parmesan").value;
  var yogurt = document.getElementById("yogurt").value;
  var coconutMilk = document.getElementById("coconutMilk").value;
  var beef = document.getElementById("beef").value;
  var chicken = document.getElementById("chicken").value;
  var bacon = document.getElementById("bacon").value;
  var fish = document.getElementById("fish").value;
  var pork = document.getElementById("pork").value;
  var tomatoes = document.getElementById("tomatoes").value;
  var cabbage = document.getElementById("cabbage").value;
  var brocolli = document.getElementById("brocolli").value;
  var cauliflower = document.getElementById("cauliflower").value;
  var spinach = document.getElementById("spinach").value;
  var sukuma = document.getElementById("sukuma").value;
  var onion = document.getElementById("onion").value;
  var garlic = document.getElementById("garlic").value;
  var tangawizi = document.getElementById("tangawizi").value;

  // alert("Check this out" + meals.meat.Chicken);

}if (Chicken !== null){
return "check out thiis".meal.beef.chicken;
}
if(Bacon !== null){
  return "Check out this" + meals.meat.Bacon;
}
if(Fish !== null){
  return"check this out" + meals.meat.Fish;
}
if(Pork !== null){
  return"Check out this " + meals.meat.Pork;
}

if( beef !== null){
  return"Check out" +meals.meat.beef;
}

$(document).ready(function(){
  meals={
    vegetables:{
        "tomato": "https://www.bbcgoodfood.com/recipes/collection/tomato/",
        "cabbage": "https://www.wellplated.com/sauteed-cabbage/",
        "brocolli": " https://www.allrecipes.com/recipe/228221/easy-lemon-and-garlic-broccoli/",
        "cauliflower": "https://www.bbcgoodfood.com/recipes/collection/cauliflower",
        "spinach": "https://www.simplyrecipes.com/recipes/spinach/",
        "sukuma": "https://cookpad.com/ke/recipes/2401121-fried-sukuma-wiki-kales",
        "onion": "https://www.simplyrecipes.com/recipes/how_to_caramelize_onions/",
        "garlic": "https://cafedelites.com/garlic-mushrooms/",
        "tangawizi": " https://tarasmulticulturaltable.com/chai-ya-tangawizi-kenyan-ginger-tea/"
    },
    meat : {
      "beef":"https://www.allrecipes.com/recipe/17325/savory-garlic-marinated-steaks/?internalSource=streams&referringId=475&referringContentType=Recipe%20Hub&clickId=st_trending_s ",
     "Chicken" :" https://recipes.timesofindia.com/recipes/masala-chicken/rs54673639.cms,",
     "Bacon" : "https://www.thespruceeats.com/how-to-make-your-own-bacon-4146515",
      "Fish": "https://www.gimmesomeoven.com/cook-whole-fish/",
      "pork" : "https://kenyayote.com/procedure-cooking-wet-fry-pork-meal-kenyan-recipe/"
    },
    combinedMeals:{
      "ricespinach":"https://www.allrecipes.com/recipe/72500/spinach-rice/",
      "ugaliSukumaMeat": "https://www.tasteoftheplace.com/a-kenyan-meal/",
      "riceBeefStew": "https://shewearsmanyhats.com/easy-stew-beef-rice-recipe/",
      "lasagna": "https://www.tasteofhome.com/recipes/best-lasagna/",
      "parmesanwedges": "https://www.lecremedelacrumb.com/baked-garlic-parmesan-potato-wedges/",
      "cheeseBacon": "https://www.bbcgoodfood.com/recipes/cheese-bacon-scones",
      "baconOmelete": "https://www.recipetips.com/recipe-cards/t--37341/bacon-and-cheese-omelette.asp",
      "riceFish": "https://cooking.nytimes.com/recipes/1016024-fish-stew-with-rice",
      "beefTumbukiza": "https://cookpad.com/ke/recipes/5613019-beef-tumbukiza",
      "porkUgali": "https://cookpad.com/ke/recipes/2511543-fried-pork-with-ugali",
      "riceChicken": "https://shewearsmanyhats.com/chicken-and-rice-is-oh-so-nice/",
      "ugaliChicken": "https://cookpad.com/ke/recipes/7415037-fried-chicken-with-ugali",
      "riceBlackbeans": "https://www.allrecipes.com/recipe/15559/black-beans-and-rice/",
      "chapatiBlackbeans": "https://cookpad.com/ke/recipes/2605885-chapati-and-blackbeans",
      "riceLentilsYogurt": "https://cookieandkate.com/mujaddara-recipe/",
      "riceBlackBeansChicken": "https://www.tasteofhome.com/recipes/black-bean-chicken-with-rice/",
      "riceBeans": "https://www.foodnetwork.com/recipes/robert-irvine/red-beans-and-rice-recipe-1950779",
      "riceBeansCoconut": "https://catholicfoodie.com/ugali-with-bean-soup-from-tanzania-4lent4life",
      "ugaliBeansVeg": "https://cookpad.com/ke/recipes/3521094-ugali-served-with-beans-stew-and-vegetables",
      "ugaliFishSukuma": "https://cookpad.com/ke/recipes/3416696-fried-fish-kales-and-kachumbari-with-ugali",
      "jollofRiceFish": "https://www.sbs.com.au/food/recipes/jollof-rice-fish"
    }
  };
function checkOut (){
 

 //Determine links to return if users select more than one ingredient
 
  //Match users' flour and grains' selection and recipe links
  if(allPurposeFlour !== null){
    return meals.flour.wheatFlour;
  }else if(maizeFlour !== null){
    return meals.flour.maizeFlour;
  }else if(rice !==null){
    return meals.flour.rice;
  }else if(pasta !== null){
    return meals.flour.pasta;
  }else if(beans !== null){
    return meals.flour.beans;
  }else if(lentils !== null){
    return meals.flour.lentils;
  }else if (blackBeans!== null){
    return meals.flour.blackbeans;
  };
  
//Match users' vegetable selection and recipe links
  if(tomatoes !== null){
    return meals.vegetables.tomato;
  }else if(cabbage !== null){
    return meals.vegetables.cabbage;
  }else if(brocolli !== null){
    return meals.vegetables.broccoli;
  }else if(cauliflower !== null){
    return meals.vegetables.cauliflower;
  }else if(spinach !== null){
    return meals.vegetables.spinach;
  }else if(sukuma !== null){
    return meals.vegetables.sukuma;
  }else if(onion !== null){
    return meal.vegetables.onion;
  }else if(garlic !== null){
    returnmeals.vegetables.garlic;
  }else{
    return meals.vegetables.tangawizi;
  };

  if(allPurposeFlour !== null && blackBeans !== null){
    return meals.combinedMeals.chapatiBlackbeans;
  }else if(rice !== null && beans !== null){
    return meals.combinedMeals.riceBeans;
  }else if(rice !== null && blackBeans !== null){
    return meals.combinedMeals.riceBlackbeans;
  }else if(rice !== null && blackBeans !== null && chicken !== null){
    return meals.combinedMeals.riceBlackBeansChicken;
  }else if(rice !== null && coconutMilk !== null && beans !== null){
    return meals.combinedMeals.riceBeansCoconut;
  }else if(rice !== null && chicken !== null){
    return meals.combinedMeals.riceChicken;
  }else if(rice !== null && fish !== null){
    return meals.combinedMeals.riceFish;
  }else if(rice !== null && beef !== null){
    return meals.combinedMeals.riceBeefStew;
  }else if(rice !== null && lentils !== null && yogurt !== null){
    return meals.combinedMeals.riceLentilsYogurt;
  }else if(ugali !== null && fish !== null && sukuma !== null){
    return meals.combinedMeals.ugaliFishSukuma;
  }else if(ugali !== null && fish !== null && beans !== null){
    return meals.combinedMeals.ugaliBeansVeg;
  }else if(rice !== null && garlic !== null && fish !== null){
    return meals.combinedMeals.jollofRiceFish;
  }else if(ugali !== null && beef !== null){
    return meals.combinedMeals.ugaliChicken;
  }else if(ugali !== null && pork !== null){
    return meals.combinedMeals.porkUgali;
  }else if(bacon !== null && eggs !== null){
    return meals.combinedMeals.baconOmelete;
  }else if(parmesan !== null && bacon !== null){
    return meals.combinedMeals.cheeseBacon;
  }else if(cheddar !== null && pasta !== null){
    return meals.combinedMeals.lasagna;
  }else if(rice !== null && milk !== null && spinach !== null){
    return meals.combinedMeals.ricespinach;
  }else if(beef !== null && spinach !== null){
    return meals.combinedMeals.beefTumbukiza;
  }else if(ugali !== null && tangawizi !== null && meat !== null && sukuma !== null){
    return meals.combinedMeals.ugaliSukumaMeat;
  }else if(ugali !== null && chicken !== null){
    return meals.combinedMeals.ugaliChicken;
  };
};
 


  
});
