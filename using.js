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



];

var checkout=[];
var total =[];

function makeList(items){
    document.writeln("<span class='top'>Street Corner Bodega?</span>");
    document.writeln("<span class='top' id='right' onclick='checkOut()'>Check out</span>");
    for (var i = 0; i < items.length; i++) {
        
        document.writeln("<button class='button' id='item-" + items[i].name + "'>" + items[i].name +"<br>$"+items[i].price+ "</button>");
        
        
    }
    document.writeln("<ol>");
    document.writeln("<div id='start' class='footer'>Cart</div>");
    document.writeln("</ol>");

}
  

makeList(items);

$('#item-Banana').click(function(items){
    alert("Banana added to cart");
    debugger;
    total.push(.65);
    checkout.push("1 Banana at $");
    item = "A Banana at $.65";
    addItem(item)

});
$('#item-Apple').click(function(items){
    alert("Apple added to cart");
    debugger;
    total.push(1.00);
    checkout.push("1 Apple at $");
    item = "A Apple at $1.00";
    addItem(item)

});
$('#item-Grape').click(function(items){
    alert("Grape added to cart");
    debugger;
    total.push(.25);
    checkout.push("1 Grape at $");
    item = "A Grape at $.25";
    addItem(item)

});
$('#item-Lemon').click(function(items){
    alert("Lemon added to cart");
    debugger;
    total.push(.50);
    checkout.push("1 Lemon at $");
    item = "A Lemon at $.50";
    addItem(item)

});
$('#item-Lime').click(function(items){
    alert("Lime added to cart");
    debugger;
    total.push(.45);
    checkout.push("1 Lime at $");
    item = "A Lime at $.45";
    addItem(item)

});
$('#item-Mango').click(function(items){
    alert("Mango added to cart");
    debugger;
    total.push(1.50);
    checkout.push("1 Mango at $");
    item = "A Mango at $1.50";
    addItem(item)

});
$('#item-Cherry').click(function(items){
    alert("Cherry added to cart");
    debugger;
    total.push(.15);
    checkout.push("1 Cherry at $");
    item = "A Cherry at $.15";
    addItem(item)

});
$('#item-Orange').click(function(items){
    alert("Orange added to cart");
    debugger;
    total.push(.70);
    checkout.push("1 Orange at $");
    item = "A Orange at $.70";
    addItem(item)

});
$('#item-Peach').click(function(items){
    alert("Peach added to cart");
    debugger;
    total.push(1.20);
    checkout.push("1 Peach at $");
    item = "A Peach at $1.20";
    addItem(item)

});
$('#item-Kiwi').click(function(items){
    alert("Kiwi added to cart");
    debugger;
    total.push(.90);
    checkout.push("1 Kiwi at $");
    item = "A Kiwi at $.90";
    addItem(item)

});



function checkOut(){{
    alert("This is the checkout");
    
    var subtotal = 0;
    var tax = 0;
    var grandtotal = 0;
    debugger;
    for (var i = 0; i < checkout.length; i++) {
        
        document.writeln("<div>" + checkout[i]+ total[i]+ "</div>");
        subtotal = subtotal + total[i];
        
    }
    //debugger;
    document.writeln("<div>----------------------------------------------</div>");
    document.writeln("<div>" +"Sub total: "+ subtotal.toFixed(2)+  "</div>");
    tax = subtotal * .06;
    document.writeln("<div>" +"Tax: "+ tax.toFixed(2)+  "</div>");
    grandtotal = subtotal + tax;
    document.writeln("<div>" +"Grand total: "+ grandtotal.toFixed(2)+  "</div>");


};
}

function addItem(message) {
  var a = document.getElementById('start');
  var b = '<li>' +message +'</li>';
  a.insertAdjacentHTML('beforeend', b);
  
}

