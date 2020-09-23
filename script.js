
function calcular_area(lado)
{
  var area;
  console.log("area");
  area = 6 * lado * lado;
  resultado_area.innerHTML = "<h1>El área del cubo es de " + area + "cm2</h1>";
}
function calular_volumen(lado)
{
  var volumen;
  console.log("volume");
  volumen = lado * lado * lado;
  resultado_volumen.innerHTML = "<h1>El volumen del cubo es de " + volumen + "cm3</h1>";
}
function entregarValores()
{
  var t = document.getElementById("usuario_lado");
  var volumen = document.getElementById("resultado");
  var cube_lado = 10;
  cube_lado = parseInt(t.value);
  console.log("click");
  calcular_area(cube_lado);
  calular_volumen(cube_lado);
}

console.log("test");
var resultado = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", entregarValores);
