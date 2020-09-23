// Elabora un programa en el que utilices la condicional if.
//
// Elabora el código para una pizzería que ha repartido cupones,
//uno de los cupones te dará un descuento del 10 por ciento, el segundo cupón te dará un descuento del 20 por ciento.
// Cuando el usuario realice el pedido, comprueba que tipo de cupón tiene y calcula el precio final y envía un mensaje en pantalla donde rectifique la pizza ordenada
// y le comuniques el precio final y si tuvo un descuento de que tipo.
//
// Valora la opción de que el cliente no tenga cupón.
//
// Cuando crees el programa, crea al menos tres tipos diferentes de pizzas.
//
// Puedes usar estas variables como ejemplo o crear tus propias variables.
//
// Ejemplo:
//
// cupon1=10%
//
// cupon2=20%
//
// preciopizzaA=15
//
// preciopizzaB=20
//
// preciopizzaC=25
function calcularPrecioPedido(cantidadPizzas,estiloPizza)
{
  var cupon1=.1;
  var cupon2=.2;
  var precioPeperoni=150;
  var precioHawaiana=200;
  var precioFunghi=250;
  var tipo_cupon = document.getElementsByName('cupones');
  var noHayEleccion = 0;
  for (var i = 0; i < tipo_cupon.length; i++)
  {
    if(tipo_cupon[i].checked == true)
    {
      cuponElegido = tipo_cupon[i].value;
      console.log(cuponElegido);
    }
  }
  console.log(estiloPizza);
  if (estiloPizza=="peperoni")
  {
    subtotal = precioPeperoni * cantidadPizzas;
  }
  if (estiloPizza=="hawaiana")
  {
    subtotal = precioHawaiana * cantidadPizzas;
  }
  if (estiloPizza=="funghi")
  {
    subtotal = precioFunghi * cantidadPizzas;
  }
  console.log(subtotal);
  if (cuponElegido == "Platinum")
  {
    descuento = subtotal * cupon2;
    descuento_porcentaje = 20;
    console.log(descuento);
  }
  if (cuponElegido == "Oro")
  {
    descuento = subtotal * cupon2;
    descuento_porcentaje = 10;
    console.log(descuento);
  }
  if (cuponElegido == "Nuevo")
  {
    descuento_porcentaje = 0;
  }
  total = subtotal - descuento;
  console.log(total);
  return total;
}

function obtenerTipoPizza()
{
  var tipoPizza = document.getElementsByName('pizza_usuario');
  //console.log(tipoPizza);
  var noHayEleccion = 0;
  for(var i = 0; i < tipoPizza.length; i++)
  {
    if(tipoPizza[i].checked == true)
    {
      pizzaElegida = tipoPizza[i].value;
    }
    if(tipoPizza[i].checked == false)
    {
      noHayEleccion ++;
    }
  }
  console.log(pizzaElegida);
  console.log(noHayEleccion);
  if(noHayEleccion >= tipoPizza.length)
  {
    eleccionPizza = false;
  }
  else
  {
    eleccionPizza = true;
    return pizzaElegida;
  }
}
// document.getElementById("resultado").innerHTML = "valor"+ pizzaElegida;

function displayPizzaUsuario()
{
  obtenerTipoPizza();
  var t = document.getElementById("usuario_number_pizzas");
  var number_pizzas = parseInt(t.value);
  var numeroDEpizzas = number_pizzas;
  if(eleccionPizza == true)
  {
    calcularPrecioPedido(numeroDEpizzas,pizzaElegida);
    //console.log("eleccion "+ noHayEleccion);
    // console.log("numero de pizzas " + numeroDEpizzas);
    if(numeroDEpizzas == 1)
    {
      document.getElementById("resultado").innerHTML = "<h2>Pediste una pizza de "+pizzaElegida+"<br>Ya que eres un cliente "+cuponElegido + " tienes un descuento del " +descuento_porcentaje + "% <br> El subtotal de su pedido fue de $"+subtotal+"<br>La cantidad descontada es de $"+descuento+"<br> Asi que el total de su pedido es de $" +total+ "<br> Muchas gracias por su compra</h2>";

    }
    else
    {
      document.getElementById("resultado").innerHTML = "<h2>Pediste "+numeroDEpizzas+" pizzas de "+pizzaElegida+"<br>Ya que eres un cliente "+cuponElegido + " tienes un descuento del " +descuento_porcentaje + "% <br> El subtotal de su pedido fue de $"+subtotal+"<br>La cantidad descontada es de $"+descuento+"<br> Asi que el total de su pedido es de $" +total+ "<br> Muchas gracias por su compra</h2>";

    }
  }
  else
  {
    document.getElementById("resultado").innerHTML = "Porfavor elige una pizza";

  }
}
var subtotal = 0;
var descuento_porcentaje = 0;
var descuento = 0;
var total = 0;
var eleccionPizza;
var pizzaElegida = false;
var cuponElegido;
var resultado = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", displayPizzaUsuario);
