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
function displayPizzaUsuario() {
  var t = document.getElementById("usuario_number_pizzas");
  var number_pizzas = parseInt(t.value);
  console.log("numero de pizzas first " + number_pizzas)
  var tipoPizza = document.getElementsByName('pizza_usuario');
  var pizzaElegida;
  var noHayEleccion = 0;
  console.log(tipoPizza);
  for(var i = 0; i < tipoPizza.length; i++)
  {
    if(tipoPizza[i].checked == true)
    {
      pizzaElegida = tipoPizza[i].value;
      console.log(pizzaElegida);
    }
    else
    {
      noHayEleccion ++;
      console.log(noHayEleccion);
    }
    console.log("numero de pizzas " + number_pizzas)
    if(number_pizzas = 1)
    {

      document.getElementById("resultado").innerHTML = "Pediste una pizza de "+pizzaElegida;
    }
      document.getElementById("resultado").innerHTML = "Pediste "+number_pizzas+" pizzas de "+pizzaElegida;
    if(noHayEleccion >= 3)
    {
      document.getElementById("resultado").innerHTML = "Porfavor elige una pizza";
    }
  }
}
console.log("test");
var resultado = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", displayPizzaUsuario);
