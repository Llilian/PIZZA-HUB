function getSizeCost() {
  var selectedSize = document.getElementById("size").value;
  return parseInt(selectedSize);
}

function getCrustCost() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getNumber() {
  var selectedNumber = document.getElementById("numberofpizza").value;
  return parseInt(selectedNumber);
}
function mushrooms() {
  var mushroom = 0;
  var addMushroom = document.getElementById("topping");
  if (addMushroom.checked === true) {
    mushroom = 150;
  }
  return parseInt(mushroom);
}

function sausages() {
  var sausage = 0;
  var addsausage = document.getElementById("topping");
  if (addsausage.checked === true) {
    sausage = 140;
  }
  return parseInt(sausage);
}
function onions() {
  var onion = 0;
  var addonions = document.getElementById("topping");
  if (addMushroom.checked === true) {
    onion = 130;
  }
  return parseInt(onion);
}
function tikkaSaucee() {
  var tikkaSauce = 0;
  var addtikkaSauce = document.getElementById("topping");
  if (addtikkaSauce.checked === true) {
    tikkaSauce = 120;
  }
  return parseInt(tikkaSauce);
}
function mozarellaCheese() {
  var cheese = 0;
  var addmozarellaCheese = document.getElementById("topping");
  if (addmozarellaCheese.checked === true) {
    cheese = 110;
  }
  return parseInt(cheese);
}

function calctotalPrice(e) {
  event.preventDefault();
  var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());

  console.log(totalPrice);
  alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}
$(document).ready(function () {
  $("#delivery").submit(function () {

    var name = $("input#name").val();
    var number = $("input#number").val();
    var location = $("input#location").val();

    alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh 200/= Thank you for chosing the pizzeria.");
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    // $(this).get(0).reset();
    //  event.preventDefault();
  });

});
