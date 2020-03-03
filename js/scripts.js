$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
$("#checkout").click(function () {
    let flavour = $(".flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size);

    let order = (f, s, c, t, n, total) => {
    return {f, s, c, t, n, total};
    };

let price, totalPrice;
switch (flavour) {
case flavour = "hawaiian":
  switch (size) {
      case size = "regular":
          price = 300;
          if (crust === "thin") {
              totalPrice = (price * number) + 100;
          } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
          } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
          } else {
              totalPrice = (price * number) + 280;
          }
          break;
    case size = "medium":
        price = 600;
        if (crust === "thin") {
            totalPrice = (price * number) + 100;
        } else if (crust === "thick") {
            totalPrice = (price * number) + 150;
        } else if (crust === "flatbread") {
            totalPrice = (price * number) + 180;
        } else {
            totalPrice = (price * number) + 280;
        }
        break;
    case size = "large":
        price = 1200;
        if (crust === "thin") {
            totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
        }
        break;
      case flavour = "mexican fiesta":
          switch (size) {
              case size = "regular":
                  price = 300;
                  if (crust === "thin") {
                      totalPrice = (price * number) + 100;
                  } else if (crust === "thick") {
                      totalPrice = (price * number) + 150;
                  } else if (crust === "flatbread") {
                      totalPrice = (price * number) + 180;
                  } else {
                      totalPrice = (price * number) + 280;
                  }
                  break;
      case size = "medium":
          price = 600;
          if (crust === "thin") {
              totalPrice = (price * number) + 100;
          } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
          } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
      case size = "large":
          price = 1200;
          if (crust === "thin") {
              totalPrice = (price * number) + 100;
          } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
          } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
          } else {
              totalPrice = (price * number) + 280;
          }
          break;
          }
      case flavour = "chessy salami":
          switch (size) {
              case size = "regular":
                  price = 300;
                  if (crust === "thin") {
                      totalPrice = (price * number) + 100;
                  } else if (crust === "thick") {
                      totalPrice = (price * number) + 150;
                  } else if (crust === "flatbread") {
                      totalPrice = (price * number) + 180;
                  } else {
                      totalPrice = (price * number) + 280;
                  }
                  break;
                    case size = "medium":
                price = 600;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
            case size = "large":
                price = 1200;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
        }
        break;
    case flavour = "something meaty":
        switch (size) {
            case size = "regular":
                price = 300;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
            case size = "medium":
                price = 600;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
          case size = "large":
              price = 1200;
              if (crust === "thin") {
                  totalPrice = (price * number) + 100;
              } else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
              } else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
              } else {
                  totalPrice = (price * number) + 280;
              }
              break;
      }
      break;
  case flavour = "BBQ chicken":
      switch (size) {
          case size = "regular":
              price = 300;
              if (crust === "thin") {
                  totalPrice = (price * number) + 100;
              } else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
              } else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
              } else {
                  totalPrice = (price * number) + 280;
              }
              break;
        case size = "medium":
            price = 600;
            if (crust === "thin") {
                totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
                totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
                totalPrice = (price * number) + 180;
            } else {
                totalPrice = (price * number) + 280;
            }
            break;
  case size = "large":
            price = 1200;
            if (crust === "thin") {
          totalPrice = (price * number) + 100;
      } else if (crust === "thick") {
          totalPrice = (price * number) + 150;
      } else if (crust === "flatbread") {
          totalPrice = (price * number) + 180;
      } else {
          totalPrice = (price * number) + 280;
      }
      break;
          }
          break;
    case flavour = "chicken and mushroom":
        switch (size) {
            case size = "regular":
                price = 300;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
      case size = "medium":
          price = 600;
          if (crust === "thin") {
              totalPrice = (price * number) + 100;
          } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
          } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
          } else {
              totalPrice = (price * number) + 280;
          }
    break;
    case size = "large":
              price = 1200;
              if (crust === "thin") {
                  totalPrice = (price * number) + 100;
              } else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
              } else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
              } else {
                  totalPrice = (price * number) + 280;
              }
              break;
      }
      break;
    case flavour = "tikka chicken":
        switch (size) {
            case size = "regular":
                price = 300;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
      case size = "medium":
          price = 600;
          if (crust === "thin") {
              totalPrice = (price * number) + 100;
          } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
          } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
          } else {
              totalPrice = (price * number) + 280;
          }
          break;
  case size = "large":
            price = 1200;
            if (crust === "thin") {
                totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
                totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
                totalPrice = (price * number) + 180;
            } else {
                totalPrice = (price * number) + 280;
            }
            break;
    }
    break;
    case flavour = "peri peri chicken":
        switch (size) {
            case size = "regular":
                price = 300;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 280;
                }
                break;
      case size = "medium":
          price = 600;
          if (crust === "thin") {
              totalPrice = (price * number) + 100;
          } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
          } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
          } else {
              totalPrice = (price * number) + 280;
          }
    break;
        case size = "large":
            price = 1200;
            if (crust === "thin") {
                totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
                totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
                totalPrice = (price * number) + 180;
            } else {
                totalPrice = (price * number) + 280;
            }
            break;
          }
          break;
  }
  break;
  case flavour = "Margherita":
      switch (size) {
          case size = "regular":
              price = 300;
              if (crust === "thin") {
                  totalPrice = (price * number) + 100;
              } else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
              } else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
              } else {
                  totalPrice = (price * number) + 280;
              }
              break;
  case size = "medium":
      price = 600;
      if (crust === "thin") {
          totalPrice = (price * number) + 100;
      } else if (crust === "thick") {
          totalPrice = (price * number) + 150;
      } else if (crust === "flatbread") {
          totalPrice = (price * number) + 180;
      } else {
          totalPrice = (price * number) + 280;
      }
break;
  case size = "large":
      price = 1200;
      if (crust === "thin") {
          totalPrice = (price * number) + 100;
      } else if (crust === "thick") {
          totalPrice = (price * number) + 150;
      } else if (crust === "flatbread") {
          totalPrice = (price * number) + 180;
      } else {
          totalPrice = (price * number) + 280;
      }
      break;
    }
    break;
}
break;
case flavour = "cheese":
    switch (size) {
        case size = "regular":
            price = 300;
            if (crust === "thin") {
                totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
                totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
                totalPrice = (price * number) + 180;
            } else {
                totalPrice = (price * number) + 280;
            }
            break;
         case size = "medium":
              price = 600;
              if (crust === "thin") {
                  totalPrice = (price * number) + 100;
              } else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
              } else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
              } else {
                  totalPrice = (price * number) + 280;
              }
          break;
          case size = "large":
              price = 1200;
              if (crust === "thin") {
                  totalPrice = (price * number) + 100;
              } else if (crust === "thick") {
                  totalPrice = (price * number) + 150;
              } else if (crust === "flatbread") {
                  totalPrice = (price * number) + 180;
              } else {
                  totalPrice = (price * number) + 280;
              }
              break;
            }
  switch (topping) {
      case topping = "tomato":
          totalPrice = totalPrice + 80;
          break;
      case topping = "onions":
          totalPrice = totalPrice + 80;
          break;
      case topping = "mushroom":
          totalPrice = totalPrice + 80;
          break;
      case topping = "greenpepper":
          totalPrice = totalPrice + 80;
          break;
      case topping = "olives":
          totalPrice = totalPrice + 120;
          break;
      case topping = "pineapple":
          totalPrice = totalPrice + 120;
          break;
      case topping = "sweetcorn":
          totalPrice = totalPrice + 120;
          break;
      case topping = "macon":
          totalPrice = totalPrice + 120;
          break;
      case topping = "mince":
          totalPrice = totalPrice + 120;
          break;
      case topping = "beef":
          totalPrice = totalPrice + 170;
          break;
      case topping = "chicken":
          totalPrice = totalPrice + 170;
          break;

  }


  let newOrder = order(flavour, size, crust, topping, number, totalPrice);
  console.log(newOrder);


  $('.summary').slideDown(2000);
  $('.cdata-overlay').slideUp();
  $('#list').slideDown();
  $('.deliver').show(1000);
  $('.delivernot').show(1000);

  $('#list').text(" ");
  $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
      + newOrder.s + "<br>" + "Crust :     "
      + newOrder.c + "<br>" + "Toppings :     "
      + newOrder.t + "<br>" + " Number of pizzas :    "
      + newOrder.n + "<br>" + "Total Price :  "
      + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '26px');
});

$(".deliver").click(function () {
  $('.summary').slideUp();
  $('#list').slideUp();
  $('.summary').text("Provide location details").slideDown();
  $('.deliver').hide(1000);
  $('.delivernot').hide(1000);
  $('.data').slideDown();
});



$(".delivernot").click(function () {

});


$(function () {
  $.scrollify.move('#sum-order');
});
});
