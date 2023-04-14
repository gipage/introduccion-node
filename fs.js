const filesystem = require("fs");
// ******************* FS SYNC*********************
/*
//Leer archivos
const read = filesystem.readFileSync('data/hello.word.txt','utf-8');
console.log(read);
//escribir archivos crea uno nuevo
filesystem.writeFileSync('data/newarchivo.txt', '3er archivo')  
//sin crear uno nuevo y escribiendo en el
filesystem.writeFileSync('data/newarchivo.txt', 'texto añadido',{
    flag: 'a' //append
})  
*/

// ******************* FS ASYNC*********************
//no asignar el read file a una constante pq se va a ejecutar desp de cierto tiempo
//callback
filesystem.readFile("data/hello.word.txt", (error, data) => {
    if (error)
        console.log(error);
    else
        console.log(data.toString());
});
