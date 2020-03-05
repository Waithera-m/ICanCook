
$(document).ready(function () {
  meals = {
    flour: {
      "wheatFlour": "https://www.allrecipes.com/recipe/233531/quick-whole-wheat-chapati/",
      "maizeFlour": "https://recipes.timesofindia.com/recipes/maize-flour-dhoklas/rs59756029.cms",
      "rice": "https://www.delish.com/cooking/a20089653/how-to-cook-rice/",
      "pasta": "https://thewanderlustkitchen.com/pasta-for-one-10-minutes/",
      "beans": "https://www.bbcgoodfood.com/recipes/kidney-bean-curry",
      "lentils": "https://www.culinaryhill.com/how-to-cook-lentils/",
      "blackbeans": "https://www.allrecipes.com/recipe/63113/best-black-beans/"
    },
    dairy: {
      "milk": "https://healthynibblesandbits.com/how-to-make-paneer/",
      "eggs": "https://www.bonappetit.com/recipe/real-deal-aioli",
      "cheddar": "https://www.tasteofhome.com/recipes/parmesan-potato-wedges/",
      "parmesan": "https://www.tasteofhome.com/recipes/parmesan-baked-potatoes/",

    },
    vegetables: {
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
    meat: {
      "beef": "https://www.allrecipes.com/recipe/17325/savory-garlic-marinated-steaks/?internalSource=streams&referringId=475&referringContentType=Recipe%20Hub&clickId=st_trending_s ",
      "chicken": " https://recipes.timesofindia.com/recipes/masala-chicken/rs54673639.cms,",
      "bacon": "https://www.thespruceeats.com/how-to-make-your-own-bacon-4146515",
      "fish": "https://www.gimmesomeoven.com/cook-whole-fish/",
      "pork": "https://kenyayote.com/procedure-cooking-wet-fry-pork-meal-kenyan-recipe/"
    },
    combinedMeals: {
      "ricespinach": "https://www.allrecipes.com/recipe/72500/spinach-rice/",
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
  }

  $('#submit').click(function () {
    var recipe_link = checkOut();
    $('#links').html('<a href="' + recipe_link + '" target="_blank">Your Recipe Link</a>')
  });

  function checkOut() {
    var allPurposeFlour = $("#allPurposeWheatFlour").is(':checked');
    var maizeFlour = $("#maizeFlour").is(':checked');
    var rice = $("#rice").is(':checked');
    var pasta = $("#pasta").is(':checked');
    var beans = $("#beans").is(':checked');
    var lentils = $("#lentils").is(':checked');
    var blackBeans = $("#blackbeans").is(':checked');
    var milk = $("#milk").is(':checked');
    var eggs = $("#eggs").is(':checked');
    var cheddar = $("#cheddar").is(':checked');
    var parmesan = $("#parmesan").is(':checked');
    var yogurt = $("#yogurt").is(':checked');
    var coconutMilk = $("#coconutMilk").is(':checked');
    var beef = $("#beef").is(':checked');
    var chicken = $("#chicken").is(':checked');
    var bacon = $("#bacon").is(':checked');
    var fish = $("#fish").is(':checked');
    var pork = $("#pork").is(':checked');
    var tomatoes = $("#tomatoes").is(':checked');
    var cabbage = $("#cabbage").is(':checked');
    var brocolli = $("#brocolli").is(':checked');
    var cauliflower = $("#cauliflower").is(':checked');
    var spinach = $("#spinach").is(':checked');
    var sukuma = $("#sukuma").is(':checked');
    var onion = $("#onion").is(':checked');
    var garlic = $("#garlic").is(':checked');
    var tangawizi = $("#tangawizi").is(':checked');
    var links = [];

    if (milk) {
      links.push(meals.dairy.milk);
    }
    if (eggs) {
      links.push(meals.dairy.eggs);
    }
    if (cheddar) {
      links.push(meals.dairy.cheddar);
    }
    if (parmesan) {
      links.push(meals.dairy.cheddar);
    }
    if (chicken) {
      links.push(meal.beef.chicken);
    }
    if (bacon) {
      links.push(meals.meat.Bacon);
    }
    if (fish) {
      links.push(meals.meat.Fish);
    }
    if (pork) {
      links.push(meals.meat.Pork)
    }

    if (beef) {
      links.push(meals.meat.beef);
    }


    //Determine links to links.push(if users select more than one ingredient

    //Match users' flour and grains' selection and recipe links
    if (allPurposeFlour) {
      links.push(meals.flour.wheatFlour);
    } if (maizeFlour) {
      links.push(meals.flour.maizeFlour);
    } if (rice) {
      links.push(meals.flour.rice);
    } if (pasta) {
      links.push(meals.flour.pasta);
    } if (beans) {
      links.push(meals.flour.beans);
    } if (lentils) {
      links.push(meals.flour.lentils);
    } if (blackBeans) {
      links.push(meals.flour.blackbeans);
    };

    //Match users' vegetable selection and recipe links
    if (tomatoes) {
      links.push(meals.vegetables.tomato);
    } if (cabbage) {
      links.push(meals.vegetables.cabbage);
    } if (brocolli) {
      links.push(meals.vegetables.broccoli);
    } if (cauliflower) {
      links.push(meals.vegetables.cauliflower);
    } if (spinach) {
      links.push(meals.vegetables.spinach);
    } if (sukuma) {
      links.push(meals.vegetables.sukuma);
    } if (onion) {
      links.push(meal.vegetables.onion);
    } if (garlic) {
      links.push(meals.vegetables.garlic);
    } if (tangawizi) {
      links.push(meals.vegetables.tangawizi);
    }

    if (links.length === 1) {
      return links[0];
    }

    console.log(links);

    if (allPurposeFlour && blackBeans) {
      return meals.combinedMeals.chapatiBlackbeans;
    } else if (rice && beans) {
      return meals.combinedMeals.riceBeans;
    } else if (rice && blackBeans) {
      return meals.combinedMeals.riceBlackbeans;
    } else if (rice && blackBeans && chicken) {
      return meals.combinedMeals.riceBlackBeansChicken;
    } else if (rice && coconutMilk && beans) {
      return meals.combinedMeals.riceBeansCoconut;
    } else if (rice && chicken) {
      return meals.combinedMeals.riceChicken;
    } else if (rice && fish) {
      return meals.combinedMeals.riceFish;
    } else if (rice && beef) {
      return meals.combinedMeals.riceBeefStew;
    } else if (rice && lentils && yogurt) {
      return meals.combinedMeals.riceLentilsYogurt;
    } else if (maizeFlour && fish && sukuma) {
      return meals.combinedMeals.ugaliFishSukuma;
    } else if (maizeFlour && fish && beans) {
      return meals.combinedMeals.ugaliBeansVeg;
    } else if (rice && garlic && fish) {
      return meals.combinedMeals.jollofRiceFish;
    } else if (maizeFlour && beef) {
      return meals.combinedMeals.ugaliChicken;
    } else if (maizeFlour && pork) {
      return meals.combinedMeals.porkUgali;
    } else if (bacon && eggs) {
      return meals.combinedMeals.baconOmelete;
    } else if (parmesan && bacon) {
      return meals.combinedMeals.cheeseBacon;
    } else if (cheddar && pasta) {
      return meals.combinedMeals.lasagna;
    } else if (rice && milk && spinach) {
      return meals.combinedMeals.ricespinach;
    } else if (beef && spinach) {
      return meals.combinedMeals.beefTumbukiza;
    } else if (maizeFlour && tangawizi && meat && sukuma) {
      return meals.combinedMeals.ugaliSukumaMeat;
    } else if (maizeFlour && chicken) {
      return meals.combinedMeals.ugaliChicken;
    }else {
      return meals.combinedMeals.lasagna
    }
  }
});
