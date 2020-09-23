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
  var cupon1=10;
  var cupon2=20;
  var precioPeperoni=150;
  var precioHawaiana=200;
  var precioFunghi=250;
}

function displayPizzaUsuario()
{
  var t = document.getElementById("usuario_number_pizzas");
  var number_pizzas = parseInt(t.value);
  var tipoPizza = document.getElementsByName('pizza_usuario');
  var pizzaElegida;
  var noHayEleccion = 0;
  for(var i = 0; i < tipoPizza.length; i++)
  {
    var numeroDEpizzas = number_pizzas;
    if(tipoPizza[i].checked == true)
    {
      pizzaElegida = tipoPizza[i].value;
      console.log(pizzaElegida);
    }
    if(tipoPizza[i].checked == false)
    {
      noHayEleccion ++;
    }
    console.log("eleccion "+ noHayEleccion);
    console.log("numero de pizzas " + numeroDEpizzas);
    if(numeroDEpizzas == 1)
    {
      document.getElementById("resultado").innerHTML = "Pediste una pizza de "+pizzaElegida;
    }
    else
    {
      document.getElementById("resultado").innerHTML = "Pediste "+numeroDEpizzas+" pizzas de "+pizzaElegida;

    }
    if(noHayEleccion >= tipoPizza.length)
    {
      document.getElementById("resultado").innerHTML = "Porfavor elige una pizza";
    }
  }
}

var resultado = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", displayPizzaUsuario);
