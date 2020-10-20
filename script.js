var indcard = document.getElementById("india");
var wcard = document.getElementById("world");


indcard.addEventListener("mouseover", function(){
    this.style = "box-shadow:5px 5px 10px grey;";

});

indcard.addEventListener("mouseout", function(){
    this.style = "box-shadow:2px 2px 5px grey;";

});

wcard.addEventListener("mouseover", function(){
    this.style = "box-shadow:5px 5px 10px grey;";

});

wcard.addEventListener("mouseout", function(){
    this.style = "box-shadow:2px 2px 5px grey;";

});

indcard.addEventListener("click", function(){
    window.location.href = "india.html";
});

wcard.addEventListener("click", function(){
    window.location.href = "world.html";
});



