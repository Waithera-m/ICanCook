var meals ={
    dairy:{
        "milk":"https://healthynibblesandbits.com/how-to-make-paneer/",
        "eggs":"https://www.bonappetit.com/recipe/real-deal-aioli",
        "cheddar":"https://www.tasteofhome.com/recipes/parmesan-potato-wedges/",
        "parmesan":"https://www.tasteofhome.com/recipes/parmesan-baked-potatoes/",

    }
}
 
function checkOut(){
    var milk = document.getElementById("milk").value;
    var eggs = document.getElementById("eggs").value;
    var cheddar= document.getElementById("cheddar").value;
    var parmesan = document.getElementById("parmesan").value;
    var rice = document.getElementById("rice").value;
    var allPurposeWheatFlour = document.getElementById("allPurposeWheatFlour").value;
    var maizeFlour = document.getElementById("mflour").value;
    var spaghetti = document.getElementById("spaghetti").value;
    var beans = document.getElementById("beans").value;
    var lentils = document.getElementById("lentils").value;
    var blackbeans = document.getElementById("blackbeans").value;
    var beef = document.getElementById("beef").value;
    var chicken = document.getElementById("chicken").value;
    var bacon = document.getElementById("bacon").value;
    var fish = document.getElementById("fish").value;
    var pork = document.getElementById("pork").value;


    
  
    if(milk !== null){ 
        return meals.dairy.milk;
    }else if(eggs !== null){
        return meals.dairy.eggs;
    }else if (cheddar !== null){
        return meals.dairy.cheddar;
    }else if (parmesan !== null){
        return meals.dairy.cheddar;
    }}