//Trabajar con directorios
const path = require('path');
const filepath = path.join('/public','dist','/style','main.css'); //no escribo la ruta manualmente y me abstengo del so
console.log(path.basename(filepath)); //toma la ruta y devuelve el archivo base
console.log(path.dirname(filepath)); 
console.log(path.parse(filepath)); //lo convierte en un obj
console.log(path.resolve(filepath));//me completa la ruta inicial con la del so