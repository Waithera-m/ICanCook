$(document).ready(function(){
  meals={
   flour: {
            "wheatFlour": "https://www.allrecipes.com/recipe/233531/quick-whole-wheat-chapati/",
            "maizeFlour": "https://recipes.timesofindia.com/recipes/maize-flour-dhoklas/rs59756029.cms",
            "rice": "https://www.delish.com/cooking/a20089653/how-to-cook-rice/",
            "pasta": "https://thewanderlustkitchen.com/pasta-for-one-10-minutes/",
            "beans": "https://www.bbcgoodfood.com/recipes/kidney-bean-curry",
            "lentils": "https://www.culinaryhill.com/how-to-cook-lentils/",
            "blackbeans": "https://www.allrecipes.com/recipe/63113/best-black-beans/"
   },
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
  }else if(ugali !== null $$ chicken !== null){
    return meals.combinedMeals.ugaliChicken;
  };
};

