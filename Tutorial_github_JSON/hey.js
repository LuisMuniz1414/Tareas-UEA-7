let texto ='{"extremidades":["brazo","pierna","mano"],"tamano":["largo","mediano","chico"]}';

const info = JSON.parse(texto);

document.getElementById("hey").innerHTML= "el " + info.extremidades[1] + " está " + info.tamano[1];