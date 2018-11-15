var items = [
    {
        name: "Banana",
        price: 0.65,
        spot: 0,
    },
    {
        name: "Apple",
        price: 1.00,
        spot: 1,
    },
    {
        name: "Grape",
        price: 0.25,
        spot: 2,

    },
    {
        name: "Lemon",
        price: 0.50,
        spot: 3,
    },
    {
        name: "Lime",
        price: 0.45,
        spot: 4,
    },
    {
        name: "Mango",
        price: 1.50,
        spot: 5,
    },
    {
        name: "Cherry",
        price: .15,
        spot: 6,
    },
    {
        name: "Orange",
        price: .70,
        spot: 7,
    },
    {
        name: "Peach",
        price: 1.20,
        spot: 8,
    },
    {
        name: "Kiwi",
        price: .90,
        spot: 9,
    },
    // {
    //     name: "Ham",
    //     price: 3.50,
    //     spot: 10,
    // },
    // {
    //     name: "Provelone",
    //     price: 2.50,
    //     spot: 11,
    // },
    // {
    //     name: "Cheddar",
    //     price: 2.50,
    //     spot: 12,
    // },
    // {
    //     name: "Swiss",
    //     price: 3.50,
    //     spot: 13,
    // },
    // {
    //     name: "Havarit",
    //     price: 3.50,
    //     spot: 14,
    // },
    // {
    //     name: "Oreos",
    //     price: 2.50,
    //     spot: 15,
    // },
    // {
    //     name: "Chips",
    //     price: 1.50,
    //     spot: 16,
    // },
    // {
    //     name: "Pop",
    //     price: 1.50,
    //     spot: 17,
    // },


];

var checkout=[];
var total =[];

function makeList(items){
    document.writeln("<span class='top'>Street Corner Bodega?</span>");
    document.writeln("<span class='top' id='right'>Check out</span>");
    for (var i = 0; i < items.length; i++) {
        
        document.writeln("<div class='button' id='item-" + items[i].name + "'>" + items[i].name +"<br>$"+items[i].price+ "</div>");
        //var item = {name:items[i].name, price:floatParse(items[i].price)};
        
        
    }
}
  

makeList(items);

$('#item-Banana').click(function(items){
    alert("Banana added to cart");
    debugger;
    total.push(.65);
    checkout.push("1 Banana at $");

});
$('#item-Apple').click(function(items){
    alert("Apple added to cart");
    debugger;
    total.push(1.00);
    checkout.push("1 Apple at $");

});
$('#item-Grape').click(function(items){
    alert("Grape added to cart");
    debugger;
    total.push(.25);
    checkout.push("1 Grape at $");

});
$('#item-Lemon').click(function(items){
    alert("Lemon added to cart");
    debugger;
    total.push(.50);
    checkout.push("1 Lemon at $");

});
$('#item-Lime').click(function(items){
    alert("Lime added to cart");
    debugger;
    total.push(.45);
    checkout.push("1 Lime at $");

});
$('#item-Mango').click(function(items){
    alert("Mango added to cart");
    debugger;
    total.push(1.50);
    checkout.push("1 Mango at $");

});
$('#item-Cherry').click(function(items){
    alert("Cherry added to cart");
    debugger;
    total.push(.15);
    checkout.push("1 Cherry at $");

});
$('#item-Orange').click(function(items){
    alert("Orange added to cart");
    debugger;
    total.push(.70);
    checkout.push("1 Orange at $");

});
$('#item-Peach').click(function(items){
    alert("Peach added to cart");
    debugger;
    total.push(1.20);
    checkout.push("1 Peach at $");

});
$('#item-Kiwi').click(function(items){
    alert("Kiwi added to cart");
    debugger;
    total.push(.90);
    checkout.push("1 Kiwi at $");

});



$("#right").click(function(){
    alert("This is the checkout");
    //document.body.innerHTML = "";
    debugger;
    for (var i = 0; i < checkout.length; i++) {
        
        document.writeln("<div>" + checkout[i]+ total[i]+ "</div>");
        
        
    }
    

});