var items = [
    {
        name: "Banana",
        price: 0.65,
    },
    {
        name: "Apple",
        price: 1.00,
    },
    {
        name: "Grape",
        price: 0.25,
    },
    {
        name: "Lemon",
        price: 0.50,
    },
    {
        name: "Lime",
        price: 0.45,
    },
    {
        name: "Mango",
        price: 1.50,
    },
    {
        name: "Bread",
        price: 2.50,
    },
    {
        name: "Butter",
        price: 4.50,
    },
    {
        name: "Salami",
        price: 3.50,
    },
    {
        name: "Turkey",
        price: 4.50,
    },
    {
        name: "Ham",
        price: 3.50,
    },
    {
        name: "Provelone",
        price: 2.50,
    },
    {
        name: "Cheddar",
        price: 2.50,
    },
    {
        name: "Swiss",
        price: 3.50,
    },
    {
        name: "Havarit",
        price: 3.50,
    },
    {
        name: "Oreos",
        price: 2.50,
    },
    {
        name: "Chips",
        price: 1.50,
    },
    {
        name: "Pop",
        price: 1.50,
    },


];

var  checkout=[];

function makeList(items){
    for (var i = 0; i < items.length; i++) {
        
        document.writeln("<div class='button'>" + items[i].name +"<br>$"+items[i].price+ "</div>");
        
        
    }
}

makeList(items);

$("div").click(function(items){
    alert("Added to cart");
    checkout.push(items.name,items.price);
    debugger;

});